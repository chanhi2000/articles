import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as s,t as d,e as n,n as t,g as e,d as i,f as o,r as c,o as k}from"./app-BgNevrm5.js";const h={},m={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},w=s("nav",{class:"table-of-contents"},[s("ul")],-1),v=s("hr",null,null,-1),f=o(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>Swift’s task groups are collections of tasks that work together to produce a single result. Each task inside the group must return the same kind of data, but if you use enum associated values you can make them send back different kinds of data – it’s a little clumsy, but it works.</p><p>Creating a task group is done in a very precise way to avoid us creating problems for ourselves: rather than creating a <code>TaskGroup</code> instance directly, we do so by calling the <code>withTaskGroup(of:)</code> function and telling it the data type the task group will return. We give this function the code for our group to execute, and Swift will pass in the <code>TaskGroup</code> that was created, which we can then use to add tasks to the group.</p><p>First, I want to look at the simplest possible example of task groups, which is returning 5 constant strings, adding them into a single array, then joining that array into a string:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">withTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token keyword">in</span></span>
<span class="line">      group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span> <span class="token string-literal"><span class="token string">&quot;Hello&quot;</span></span> <span class="token punctuation">}</span></span>
<span class="line">      group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span> <span class="token string-literal"><span class="token string">&quot;From&quot;</span></span> <span class="token punctuation">}</span></span>
<span class="line">      group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span> <span class="token string-literal"><span class="token string">&quot;A&quot;</span></span> <span class="token punctuation">}</span></span>
<span class="line">      group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span> <span class="token string-literal"><span class="token string">&quot;Task&quot;</span></span> <span class="token punctuation">}</span></span>
<span class="line">      group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span> <span class="token string-literal"><span class="token string">&quot;Group&quot;</span></span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">var</span> collected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">for</span> <span class="token keyword">await</span> value <span class="token keyword">in</span> group <span class="token punctuation">{</span></span>
<span class="line">          collected<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">return</span> collected<span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span>separator<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-create-a-task-group-and-add-tasks-to-it-1.zip",target:"_blank",rel:"noopener noreferrer"},b=o(`<p>I know it’s trivial, but it demonstrates several important things:</p><ol><li>We must specify the exact type of data our task group will return, which in our case is <code>String.self</code> so that each child task can return a string.</li><li>We need to specify exactly what the return value of the group will be using <code>group - &gt; String in</code> – Swift finds it hard to figure out the return value otherwise.</li><li>We call <code>addTask()</code> once for each task we want to add to the group, passing in the work we want that task to do.</li><li>Task groups conform to <code>AsyncSequence</code>, so we can read all the values from their children using <code>for await</code>, or by calling <code>group.next()</code> repeatedly.</li><li>Because the whole task group executes asynchronously, we must call it using <code>await</code>.</li></ol><p>However, there’s one other thing you <em>can’t</em> see in that code sample, which is that our task results are sent back in <em>completion</em> order and not creation order. That is, our code above might send back “Hello From A Task Group”, but it also might send back “Task From A Hello Group”, “Group Task A Hello From”, or any other possible variation – the return value could be different every time.</p><p>Tasks created using <code>withTaskGroup()</code> cannot throw errors. If you <em>want</em> them to be able to throw errors that bubble upwards – i.e., that are handled outside the task group – you should use <code>withThrowingTaskGroup()</code> instead. To demonstrate this, and also to demonstrate a more real-world example of <code>TaskGroup</code> in action, we could write some code that fetches several news feeds and combines them into one list:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">NewsStory</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span><span class="token punctuation">,</span> <span class="token class-name">Decodable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> id<span class="token punctuation">:</span> <span class="token class-name">Int</span></span>
<span class="line">    <span class="token keyword">let</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">let</span> strap<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> stories <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">NewsStory</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">NavigationView</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">List</span><span class="token punctuation">(</span>stories<span class="token punctuation">)</span> <span class="token punctuation">{</span> story <span class="token keyword">in</span></span>
<span class="line">                <span class="token class-name">VStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">Text</span><span class="token punctuation">(</span>story<span class="token punctuation">.</span>title<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>headline<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                    <span class="token class-name">Text</span><span class="token punctuation">(</span>story<span class="token punctuation">.</span>strap<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">navigationTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Latest News&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span>task <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">await</span> <span class="token function">loadStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">loadStories</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">            stories <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token function">withThrowingTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NewsStory</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">NewsStory</span><span class="token punctuation">]</span> <span class="token keyword">in</span></span>
<span class="line">                <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">...</span><span class="token number">5</span> <span class="token punctuation">{</span></span>
<span class="line">                    group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://hws.dev/news-</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">i</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">.json&quot;</span></span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">                        <span class="token keyword">let</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> url<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token keyword">return</span> <span class="token keyword">try</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">NewsStory</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">let</span> allStories <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> group<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>into<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NewsStory</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">+=</span> <span class="token short-argument">$1</span> <span class="token punctuation">}</span></span>
<span class="line">                <span class="token keyword">return</span> allStories<span class="token punctuation">.</span>sorted <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> <span class="token short-argument">$1</span><span class="token punctuation">.</span>id <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Failed to load stories&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),S={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-create-a-task-group-and-add-tasks-to-it-2.zip",target:"_blank",rel:"noopener noreferrer"},_=o("<p>In that code you can see we have a simple struct that contains one news story, a SwiftUI view showing all the news stories we fetched, plus a <code>loadStories()</code> method that handles fetching and decoding several news feeds into a single array.</p><p>There are four things in there that deserve special attention:</p><ol><li>Fetching and decoding news items might throw errors, and those errors are <em>not</em> handled inside the tasks, so we need to use <code>withThrowingTaskGroup()</code> to create the group.</li><li>One of the main advantages of task groups is being able to add tasks inside a loop – we can loop from 1 through 5 and call <code>addTask()</code> repeatedly.</li><li>Because the task group conforms to <code>AsyncSequence</code>, we can call its <code>reduce()</code> method to boil all its task results down to a single value, which in this case is a single array of news stories.</li><li>As I said earlier, tasks in a group can complete in any order, so we sorted the resulting array of news stories to get them all in a sensible order.</li></ol><p>Regardless of whether you’re using throwing or non-throwing tasks, all tasks in a group must complete before the group returns. You have three options here:</p><ol><li>Awaiting all individual tasks in the group.</li><li>Calling <code>waitForAll()</code> will automatically wait for tasks you have not explicitly awaited, discarding any results they return.</li><li>If you do not explicitly await any child tasks, they will be <em>implicitly</em> awaited – Swift will wait for them anyway, even if you aren’t using their return values.</li></ol><p>Of the three, I find myself using the first most often because it’s the most explicit – you aren’t leaving folks wondering why some or all of your tasks are launched then ignored.</p>",6),T={class:"hint-container details"},x=s("summary",null,"Similar solutions…",-1);function q(l,H){const a=c("VPCard"),p=c("FontIcon");return k(),u("div",null,[s("h1",m,[s("a",g,[s("span",null,d(l.$frontmatter.title)+" 관련",1)])]),n(a,t(e({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,v,n(a,t(e({title:"How to create a task group and add tasks to it | Swift Concurrency by Example",desc:"How to create a task group and add tasks to it",link:"https://hackingwithswift.com/quick-start/concurrency/how-to-create-a-task-group-and-add-tasks-to-it",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,s("blockquote",null,[s("p",null,[s("a",y,[n(p,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),b,s("blockquote",null,[s("p",null,[s("a",S,[n(p,{icon:"fas fa-file-zipper"}),i("Download this as an Xcode project")])])]),_,s("details",T,[x,n(a,t(e({title:"What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",desc:"What’s the difference between async let, tasks, and task groups?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",desc:"How to run tasks using SwiftUI’s task() modifier",link:"/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to cancel a task group | Swift Concurrency by Example",desc:"How to cancel a task group",link:"/hackingwithswift.com/concurrency/how-to-cancel-a-task-group.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"What’s the difference between a task and a detached task? | Swift Concurrency by Example",desc:"What’s the difference between a task and a detached task?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"What are tasks and task groups? | Swift Concurrency by Example",desc:"What are tasks and task groups?",link:"/hackingwithswift.com/concurrency/what-are-tasks-and-task-groups.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const C=r(h,[["render",q],["__file","how-to-create-a-task-group-and-add-tasks-to-it.html.vue"]]),G=JSON.parse('{"path":"/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.html","title":"How to create a task group and add tasks to it","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create a task group and add tasks to it","description":"Article(s) > How to create a task group and add tasks to it","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create a task group and add tasks to it"},{"property":"og:description","content":"How to create a task group and add tasks to it"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create a task group and add tasks to it"}],["meta",{"property":"og:description","content":"Article(s) > How to create a task group and add tasks to it"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-11-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create a task group and add tasks to it\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-11-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":4.42,"words":1325},"filePathRelative":"hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.md","localizedDate":"2021년 11월 28일","excerpt":"\\n"}');export{C as comp,G as data};
