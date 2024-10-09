import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as n,t as d,e as s,n as o,g as e,d as t,f as u,r as i,o as m}from"./app-BgNevrm5.js";const h={},k={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},y=n("nav",{class:"table-of-contents"},[n("ul")],-1),f=n("hr",null,null,-1),g=u(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>If you’re writing a command-line tool, you can use <code>async</code> in conjunction with the <code>@main</code> attribute to launch your app into an async context immediately. To do this, first create the static <code>main()</code> method as you normally would with <code>@main</code>, then add <code>async</code> to it. You can optionally also add <code>throws</code> if you don’t intend to handle errors there.</p><p>For example, we could write a small command-line tool that fetches data from a URL and prints it out:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@main</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">UserFetcher</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;https://hws.dev/users.csv&quot;</span></span><span class="token punctuation">)</span><span class="token operator">!</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">for</span> <span class="token keyword">try</span> <span class="token keyword">await</span> line <span class="token keyword">in</span> url<span class="token punctuation">.</span>lines <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Received user: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">line</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={href:"https://hackingwithswift.com/files/projects/concurrency/how-to-make-async-command-line-tools-and-scripts-1.zip",target:"_blank",rel:"noopener noreferrer"},v={class:"hint-container tip"},_=n("p",{class:"hint-container-title"},"Tips",-1),x=n("code",null,"@main",-1),H=n("code",null,"main()",-1),S=n("code",null,"main.swift",-1),C=n("p",null,[t("Using "),n("code",null,"async"),t(" and "),n("code",null,"@main"),t(" together benefits from the full range of Swift concurrency features. Behind the scenes, Swift will automatically create a new task in which it runs your "),n("code",null,"main()"),t(" method, then terminate the program when that task finishes.")],-1),E=n("code",null,"main.swift",-1),T={class:"hint-container details"},A=n("summary",null,"Similar solutions…",-1);function R(l,q){const a=i("VPCard"),c=i("FontIcon");return m(),p("div",null,[n("h1",k,[n("a",w,[n("span",null,d(l.$frontmatter.title)+" 관련",1)])]),s(a,o(e({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),y,f,s(a,o(e({title:"How to make async command-line tools and scripts | Swift Concurrency by Example",desc:"How to make async command-line tools and scripts",link:"https://hackingwithswift.com/quick-start/concurrency/how-to-make-async-command-line-tools-and-scripts",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),g,n("blockquote",null,[n("p",null,[n("a",b,[s(c,{icon:"fas fa-file-zipper"}),t("Download this as an Xcode project")])])]),n("div",v,[_,n("p",null,[t("Just like using the "),x,t(" attribute with a synchronous "),H,t(" method, you should not include a "),s(c,{icon:"fa-brands fa-swift"}),S,t(" file in your command-line project.")])]),C,n("p",null,[t("Although it doesn’t work in the current Xcode release, the goal is for Swift to support async calls in top-level code. This would mean you could use "),s(c,{icon:"fa-brands fa-swift"}),E,t(" files and remove most of the code in the previous sample – you could just go ahead and make async calls outside of a function.")]),n("details",T,[A,s(a,o(e({title:"How to call an async function using async let | Swift Concurrency by Example",desc:"How to call an async function using async let",link:"/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,o(e({title:"What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",desc:"What’s the difference between async let, tasks, and task groups?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,o(e({title:"Why can’t we call async functions using async var? | Swift Concurrency by Example",desc:"Why can’t we call async functions using async var?",link:"/hackingwithswift.com/concurrency/why-cant-we-call-async-functions-using-async-var.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,o(e({title:"How to use continuations to convert completion handlers into async functions | Swift Concurrency by Example",desc:"How to use continuations to convert completion handlers into async functions",link:"/hackingwithswift.com/concurrency/how-to-use-continuations-to-convert-completion-handlers-into-async-functions.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(a,o(e({title:"How to create and use async properties | Swift Concurrency by Example",desc:"How to create and use async properties",link:"/hackingwithswift.com/concurrency/how-to-create-and-use-async-properties.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const P=r(h,[["render",R],["__file","how-to-make-async-command-line-tools-and-scripts.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/concurrency/how-to-make-async-command-line-tools-and-scripts.html","title":"How to make async command-line tools and scripts","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to make async command-line tools and scripts","description":"Article(s) > How to make async command-line tools and scripts","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to make async command-line tools and scripts"},{"property":"og:description","content":"How to make async command-line tools and scripts"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-make-async-command-line-tools-and-scripts.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/how-to-make-async-command-line-tools-and-scripts.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to make async command-line tools and scripts"}],["meta",{"property":"og:description","content":"Article(s) > How to make async command-line tools and scripts"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2021-09-23T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to make async command-line tools and scripts\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-23T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2021-09-23T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.19,"words":658},"filePathRelative":"hackingwithswift.com/concurrency/how-to-make-async-command-line-tools-and-scripts.md","localizedDate":"2021년 9월 23일","excerpt":"\\n"}');export{P as comp,V as data};
