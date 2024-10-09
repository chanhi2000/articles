import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as n,t as p,e as s,n as t,g as e,a as u,d,f as h,r as i,o as g}from"./app-BgNevrm5.js";const k={},m={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},w=n("nav",{class:"table-of-contents"},[n("ul")],-1),y=n("hr",null,null,-1),v=h(`<blockquote><p>Available from Swift 2.0</p></blockquote><p>It&#39;s very common to place some conditional checks at the start of a method to ensure that various data is configured ready to go. For example, if a Submit button is tapped, you might want to check that the user has entered a username in your user interface. To do this, you&#39;d use this code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">submitTapped</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">guard</span> username<span class="token punctuation">.</span>text<span class="token punctuation">.</span>characters<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;All good&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using <code>guard</code> might not seem much different to using <code>if</code>, but with <code>guard</code> your intention is clearer: execution should not continue if your conditions are not met. Plus it has the advantage of being shorter and more readable, so <code>guard</code> is a real improvement, and I&#39;m sure it will be adopted quickly.</p><p>There is one bonus to using <code>guard</code> that might make it even more useful to you: if you use it to unwrap any optionals, those unwrapped values stay around for you to use in the rest of your code block. For example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">guard</span> <span class="token keyword">let</span> unwrappedName <span class="token operator">=</span> userName <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Your username is </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">unwrappedName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is in comparison to a straight <code>if</code> statement, where the unwrapped value would be available only inside the <code>if</code> block, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">if</span> <span class="token keyword">let</span> unwrappedName <span class="token operator">=</span> userName <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Your username is </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">unwrappedName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// this won&#39;t work – unwrappedName doesn&#39;t exist here!</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Your username is </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">unwrappedName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),b={class:"hint-container details"},_=n("summary",null,"Other changes in Swift 2.0…",-1),S={href:"https://hackingwithswift.com/files/playgrounds/swift/playground-1-2-to-2-0.playground.zip",target:"_blank",rel:"noopener noreferrer"};function x(o,C){const a=i("VPCard"),r=i("FontIcon");return g(),c("div",null,[n("h1",m,[n("a",f,[n("span",null,p(o.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"HACKING WITH SWIFT",desc:"What's new in Swift?",link:"/hackingwithswift.com/swift/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),w,y,s(a,t(e({title:"Use the guard keyword for early returns | Changes in Swift 2.0",desc:"Use the guard keyword for early returns",link:"https://hackingwithswift.com/swift/2.0/guard",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),v,n("details",b,[_,s(a,t(e({title:"Throwing errors | Changes in Swift 2.0",desc:"Throwing errors",link:"/hackingwithswift.com/swift/2.0/try.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),u(` 
\`\`\`component VPCard
{
  "title": "Use the guard keyword for early returns | Changes in Swift 2.0",
  "desc": "Use the guard keyword for early returns",
  "link": "/hackingwithswift.com/swift/2.0/guard.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(54,94,226,0.2)"
}
\`\`\`
`),s(a,t(e({title:"Measure strings using their character count | Changes in Swift 2.0",desc:"Measure strings using their character count",link:"/hackingwithswift.com/swift/2.0/strings.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Use the defer keyword to delay work until your scope exits | Changes in Swift 2.0",desc:"Use the defer keyword to delay work until your scope exits",link:"/hackingwithswift.com/swift/2.0/defer.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Mutability warnings | Changes in Swift 2.0",desc:"Mutability warnings",link:"/hackingwithswift.com/swift/2.0/mutability.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,t(e({title:"Checking API availability | Changes in Swift 2.0",desc:"Checking API availability",link:"/hackingwithswift.com/swift/2.0/api-availability.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n("p",null,[n("a",S,[s(r,{icon:"fas fa-file-zipper"}),d("Download Swift 2.0 playground")])])])])}const q=l(k,[["render",x],["__file","guard.html.vue"]]),A=JSON.parse('{"path":"/hackingwithswift.com/swift/2.0/guard.html","title":"Use the guard keyword for early returns","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Use the guard keyword for early returns","description":"Article(s) > Use the guard keyword for early returns","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","swift","swift-2.0"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Use the guard keyword for early returns"},{"property":"og:description","content":"Use the guard keyword for early returns"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/2.0/guard.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swift/2.0/guard.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Use the guard keyword for early returns"}],["meta",{"property":"og:description","content":"Article(s) > Use the guard keyword for early returns"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-2.0"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Use the guard keyword for early returns\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"hackingwithswift.com/swift/2.0/guard.md","excerpt":"\\n"}');export{q as comp,A as data};
