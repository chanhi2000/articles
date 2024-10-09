import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as d,e as s,n as t,g as e,d as c,f as p,r as l,o as k}from"./app-BgNevrm5.js";const h={},m={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},w=n("nav",{class:"table-of-contents"},[n("ul")],-1),g=n("hr",null,null,-1),f=p(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>Swift’s task groups can be cancelled in one of three ways:</p><ol><li>If the parent task of the task group is cancelled.</li><li>If you explicitly call <code>cancelAll()</code> on the group.</li><li>If one of your child tasks throws an uncaught error, all remaining tasks will be implicitly cancelled.</li></ol><p>The first of those happens outside of the task group, but the other two are worth investigating.</p><p>First, calling <code>cancelAll()</code> will cancel all remaining tasks. As with standalone tasks, cancelling a task group is <em>cooperative</em>: your child tasks can check for cancellation using <code>Task.isCancelled</code> or <code>Task.checkCancellation()</code>, but they can ignore cancellation entirely if they want.</p><p>I’ll show you a real-world example of <code>cancelAll()</code> in action in a moment, but before that I want to show you some toy examples so you can see how it works.</p><p>We could write a simple <code>printMessage()</code> function like this one, creating three tasks inside a group in order to generate a string:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">withThrowingTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token operator">-&gt;</span> <span class="token class-name">String</span> <span class="token keyword">in</span></span>
<span class="line">        group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;Testing&quot;</span></span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;Group&quot;</span></span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;Cancellation&quot;</span></span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        group<span class="token punctuation">.</span><span class="token function">cancelAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">var</span> collected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">for</span> <span class="token keyword">try</span> <span class="token keyword">await</span> value <span class="token keyword">in</span> group <span class="token punctuation">{</span></span>
<span class="line">                collected<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>localizedDescription<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> collected<span class="token punctuation">.</span><span class="token function">joined</span><span class="token punctuation">(</span>separator<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot; &quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),y={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-group-1.zip",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>As you can see, that calls <code>cancelAll()</code> immediately after creating all three tasks, and yet when the code is run you’ll still see all three strings printed out. I’ve said it before, but it bears repeating and this time in bold: <strong>cancelling a task group is cooperative, so unless the tasks you add implicitly or explicitly check for cancellation calling <code>cancelAll()</code> by itself won’t do much.</strong></p><p>To see <code>cancelAll()</code> actually working, try replacing the first <code>addTask()</code> call with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token class-name">Task</span><span class="token punctuation">.</span><span class="token function">checkCancellation</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&quot;Testing&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And now our behavior will be different: you might see “Cancellation” by itself, “Group” by itself, “Cancellation Group”, “Group Cancellation”, or nothing at all.</p><p>To understand why, keep the following in mind:</p><ol><li>Swift will start all three tasks immediately. They might all run in parallel; it depends on what the system thinks will work best at runtime.</li><li>Although we immediately call <code>cancelAll()</code>, some of the tasks might have started running.</li><li>All the tasks finish in completion order, so when we first loop over the group we might receive the result from any of the three tasks.</li></ol><p>When you put those together, it’s entirely possible the first task to complete is the one that calls <code>Task.checkCancellation()</code>, which means our loop will exit, we’ll print an error message, and send back an empty string. Alternatively, one or both of the other tasks might run first, in which case we’ll get our other possible outputs.</p><p>Remember, calling <code>cancelAll()</code> only cancels <em>remaining</em> tasks, meaning that it won’t undo work that has already completed. Even then the cancellation is cooperative, so you need to make sure the tasks you add to the group check for cancellation.</p><p>With that toy example out of the way, here’s a more complex demonstration of <code>cancelAll()</code> that builds on an example from an earlier chapter. This code attempts to fetch, merge, and display using SwiftUI the contents of five news feeds. If any of the fetches throws an error the whole group will throw an error and end, but if a fetch somehow succeeds while ending up with an empty array it means our data quota has run out and we should stop trying any other feed fetches.</p><p>Here’s the code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">NewsStory</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span><span class="token punctuation">,</span> <span class="token class-name">Decodable</span> <span class="token punctuation">{</span></span>
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
<span class="line">            <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token function">withThrowingTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NewsStory</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token operator">-&gt;</span> <span class="token class-name">Void</span> <span class="token keyword">in</span></span>
<span class="line">                <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token number">1</span><span class="token operator">...</span><span class="token number">5</span> <span class="token punctuation">{</span></span>
<span class="line">                    group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://hws.dev/news-</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">i</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">.json&quot;</span></span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line">                        <span class="token keyword">let</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token omit keyword">_</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> url<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token keyword">try</span> <span class="token class-name">Task</span><span class="token punctuation">.</span><span class="token function">checkCancellation</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token keyword">return</span> <span class="token keyword">try</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">NewsStory</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">for</span> <span class="token keyword">try</span> <span class="token keyword">await</span> result <span class="token keyword">in</span> group <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">if</span> result<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span></span>
<span class="line">                        group<span class="token punctuation">.</span><span class="token function">cancelAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                        stories<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>contentsOf<span class="token punctuation">:</span> result<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">                stories<span class="token punctuation">.</span>sort <span class="token punctuation">{</span> <span class="token short-argument">$0</span><span class="token punctuation">.</span>id <span class="token operator">&lt;</span> <span class="token short-argument">$1</span><span class="token punctuation">.</span>id <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Failed to load stories: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),_={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-group-2.zip",target:"_blank",rel:"noopener noreferrer"},T=p(`<p>As you can see, that calls <code>cancelAll()</code> as soon as any feed sends back an empty array, thus aborting all remaining fetches. Inside the child tasks there is an explicit call to <code>Task.checkCancellation()</code>, but the <code>data(from:)</code> also runs check for cancellation to avoid doing unnecessary work.</p><p>The other way task groups get cancelled is if one of the tasks throws an uncaught error. We can write a simple test for this by creating two tasks inside a group, both of which sleep for a little time. The first task will sleep for 1 second then throw an example error, whereas the second will sleep for 2 seconds then print the value of <code>Task.isCancelled</code>.</p><p>Here’s how that looks:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name">ExampleError</span><span class="token punctuation">:</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> badURL</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">testCancellation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token function">withThrowingTaskGroup</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> <span class="token class-name">Void</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> group <span class="token operator">-&gt;</span> <span class="token class-name">Void</span> <span class="token keyword">in</span></span>
<span class="line">            group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token class-name">Task</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>nanoseconds<span class="token punctuation">:</span> <span class="token number">1_000_000_000</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">throw</span> <span class="token class-name">ExampleError</span><span class="token punctuation">.</span>badURL</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            group<span class="token punctuation">.</span>addTask <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">try</span> <span class="token keyword">await</span> <span class="token class-name">Task</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>nanoseconds<span class="token punctuation">:</span> <span class="token number">2_000_000_000</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Task is cancelled: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation"><span class="token class-name">Task</span><span class="token punctuation">.</span>isCancelled</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">try</span> <span class="token keyword">await</span> group<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Error thrown: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">testCancellation</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-cancel-a-task-group-3.zip",target:"_blank",rel:"noopener noreferrer"},C=p('<div class="hint-container note"><p class="hint-container-title">Note</p><p>Just throwing an error inside <code>addTask()</code> isn’t enough to cause other tasks in the group to be cancelled – this only happens when you access the value of the throwing task using <code>next()</code> or when looping over the child tasks. This is why the code sample above specifically waits for the result of a task, because doing so will cause <code>ExampleError.badURL</code> to be rethrown and cancel the other task.</p></div><p>Calling <code>addTask()</code> on your group will unconditionally add a new task to the group, even if you have already cancelled the group. If you want to avoid adding tasks to a cancelled group, use the <code>addTaskUnlessCancelled()</code> method instead – it works identically except will do nothing if called on a cancelled group. Calling <code>addTaskUnlessCancelled()</code> returns a Boolean that will be true if the task was successfully added, or false if the task group was already cancelled.</p>',2),S={class:"hint-container details"},q=n("summary",null,"Similar solutions…",-1);function A(i,H){const a=l("VPCard"),o=l("FontIcon");return k(),r("div",null,[n("h1",m,[n("a",v,[n("span",null,d(i.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,g,s(a,t(e({title:"How to cancel a task group | Swift Concurrency by Example",desc:"How to cancel a task group",link:"https://hackingwithswift.com/quick-start/concurrency/how-to-cancel-a-task-group",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,n("blockquote",null,[n("p",null,[n("a",y,[s(o,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),b,n("blockquote",null,[n("p",null,[n("a",_,[s(o,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),T,n("blockquote",null,[n("p",null,[n("a",x,[s(o,{icon:"fas fa-file-zipper"}),c("Download this as an Xcode project")])])]),C,n("details",S,[q,s(a,t(e({title:"How to cancel a Task | Swift Concurrency by Example",desc:"How to cancel a Task",link:"/hackingwithswift.com/concurrency/how-to-cancel-a-task.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to create a task group and add tasks to it | Swift Concurrency by Example",desc:"How to create a task group and add tasks to it",link:"/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to handle different result types in a task group | Swift Concurrency by Example",desc:"How to handle different result types in a task group",link:"/hackingwithswift.com/concurrency/how-to-handle-different-result-types-in-a-task-group.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"What’s the difference between a task and a detached task? | Swift Concurrency by Example",desc:"What’s the difference between a task and a detached task?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"How to create and use task local values | Swift Concurrency by Example",desc:"How to create and use task local values",link:"/hackingwithswift.com/concurrency/how-to-create-and-use-task-local-values.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const V=u(h,[["render",A],["__file","how-to-cancel-a-task-group.html.vue"]]),j=JSON.parse('{"path":"/hackingwithswift.com/concurrency/how-to-cancel-a-task-group.html","title":"How to cancel a task group","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to cancel a task group","description":"Article(s) > How to cancel a task group","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to cancel a task group"},{"property":"og:description","content":"How to cancel a task group"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-cancel-a-task-group.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-cancel-a-task-group.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to cancel a task group"}],["meta",{"property":"og:description","content":"Article(s) > How to cancel a task group"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-11-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to cancel a task group\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-11-28T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":4.79,"words":1438},"filePathRelative":"hackingwithswift.com/concurrency/how-to-cancel-a-task-group.md","localizedDate":"2021년 11월 28일","excerpt":"\\n"}');export{V as comp,j as data};
