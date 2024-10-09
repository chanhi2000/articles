import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as n,t as r,e as s,n as a,g as e,a as u,d,f as k,r as o,o as h}from"./app-BgNevrm5.js";const f={},w={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},m=n("nav",{class:"table-of-contents"},[n("ul")],-1),y=n("hr",null,null,-1),v=k(`<blockquote><p>Available from Swift 2.0</p></blockquote><p>Some languages have a concept of <code>try/finally</code> which lets you tell your app &quot;no matter what happens, I want this code to be executed.&quot; Swift 2 introduced its own take on this requirement using the <code>defer</code> keyword: it means &quot;I want this work to take place, but not just yet.&quot; In practice, this usually means the work will happen just before your method ends, but here&#39;s the cool thing: this will still happen if you throw an error.</p><p>First, a simple example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Checkpoint 1&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Checkpoint 4&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Checkpoint 2&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">defer</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Do clean up here&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Checkpoint 3&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run that, you&#39;ll see &quot;Checkpoint 1&quot;, &quot;Checkpoint 2&quot;, &quot;Checkpoint 3&quot;, &quot;Do clean up here&quot;, then &quot;Checkpoint 4&quot;. So, even though the <code>defer</code> line appears before checkpoint 3, it gets executed after – it gets deferred until the method is about to end.</p><p>I put &quot;Do clean up code here&quot; in there because that&#39;s exactly what <code>defer</code> is good at: when you know you need to flush a cache, write out a file or whatever, and you want to make sure that code gets executed regardless of what path is taken through your method.</p><p>As I said, work you schedule with <code>defer</code> will execute no matter what route your code takes through your method, and that includes if you throw any errors. For example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Checkpoint 1&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Error!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Checkpoint 4&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">doStuff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Checkpoint 2&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">defer</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Do clean up here&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token class-name">MyError</span><span class="token punctuation">.</span><span class="token class-name">UserError</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Checkpoint 3&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As soon as <code>doStuff()</code> throws its error, the method is exited and at that point the deferred code is called.</p>`,9),b={class:"hint-container details"},q=n("summary",null,"Other changes in Swift 2.0…",-1),_={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-1-2-to-2-0.playground.zip",target:"_blank",rel:"noopener noreferrer"};function x(i,C){const t=o("VPCard"),p=o("FontIcon");return h(),l("div",null,[n("h1",w,[n("a",g,[n("span",null,r(i.$frontmatter.title)+" 관련",1)])]),s(t,a(e({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),m,y,s(t,a(e({title:"Use the defer keyword to delay work until your scope exits | Changes in Swift 2.0",desc:"Use the defer keyword to delay work until your scope exits",link:"https://hackingwithswift.com/swift/2.0/defer",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,n("details",b,[q,s(t,a(e({title:"Throwing errors | Changes in Swift 2.0",desc:"Throwing errors",link:"/hackingwithswift.com/swift/2.0/try.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(e({title:"Use the guard keyword for early returns | Changes in Swift 2.0",desc:"Use the guard keyword for early returns",link:"/hackingwithswift.com/swift/2.0/guard.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(e({title:"Measure strings using their character count | Changes in Swift 2.0",desc:"Measure strings using their character count",link:"/hackingwithswift.com/swift/2.0/strings.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),u(` 
\`\`\`component VPCard
{
  "title": "Use the defer keyword to delay work until your scope exits | Changes in Swift 2.0",
  "desc": "Use the defer keyword to delay work until your scope exits",
  "link": "/hackingwithswift.com/swift/2.0/defer.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),s(t,a(e({title:"Mutability warnings | Changes in Swift 2.0",desc:"Mutability warnings",link:"/hackingwithswift.com/swift/2.0/mutability.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(t,a(e({title:"Checking API availability | Changes in Swift 2.0",desc:"Checking API availability",link:"/hackingwithswift.com/swift/2.0/api-availability.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",_,[s(p,{icon:"fas fa-file-zipper"}),d("Download Swift 2.0 playground")])])])])}const I=c(f,[["render",x],["__file","defer.html.vue"]]),A=JSON.parse('{"path":"/hackingwithswift.com/swift/2.0/defer.html","title":"Use the defer keyword to delay work until your scope exits","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Use the defer keyword to delay work until your scope exits","description":"Article(s) > Use the defer keyword to delay work until your scope exits","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-2.0"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Use the defer keyword to delay work until your scope exits"},{"property":"og:description","content":"Use the defer keyword to delay work until your scope exits"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/2.0/defer.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/2.0/defer.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Use the defer keyword to delay work until your scope exits"}],["meta",{"property":"og:description","content":"Article(s) > Use the defer keyword to delay work until your scope exits"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-2.0"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Use the defer keyword to delay work until your scope exits\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.14,"words":643},"filePathRelative":"hackingwithswift.com/swift/2.0/defer.md","excerpt":"\\n"}');export{I as comp,A as data};
