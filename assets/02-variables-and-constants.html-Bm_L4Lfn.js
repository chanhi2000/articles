import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as a,t as d,e as t,n,g as s,f as p,r as o,o as h}from"./app-BgNevrm5.js";const u={},g={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},w=a("nav",{class:"table-of-contents"},[a("ul")],-1),v=a("hr",null,null,-1),f=p(`<p>Every useful program needs to store data at some point, and in Swift there are two ways to do it: variables and constants. A variable is a data store that can have its value changed whenever you want, and a constant is a data store that you set once and can never change. So, variables have values that can vary, and constants have values that are constant – easy, right?</p><p>Having both these options might seem pointless, after all you could just create a variable then never change it – why does it need to be made a constant? Well, it turns out that many programmers are – shock! – less than perfect at programming, and we make mistakes.</p><p>One of the advantages of separating constants and variables is that Xcode will tell us if we’ve made a mistake. If we say, &quot;make this date a constant, because I know it will never change&quot; then 10 lines later try to change it, Xcode will refuse to build our app.</p><p>Constants are also important because they let Xcode make decisions about the way it builds your app. If it knows a value will never change, it is able to apply optimizations to make your code run faster.</p><p>In Swift, you make a variable using the <code>var</code> keyword, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Tim McGraw&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Let’s put that into a playground so you can start getting feedback. Delete everything in there apart from the <code>import UIKit</code> line (that&#39;s the bit that pulls in Apple&#39;s core iOS framework and it&#39;s needed later on), and add that variable.</p><p>Because this is a variable, you can change it whenever you want, but you shouldn&#39;t use the <code>var</code> keyword each time – that&#39;s only used when you&#39;re declaring new variables. Try writing this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Tim McGraw&quot;</span></span></span>
<span class="line">name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Romeo&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>So, the first line creates the <code>name</code> variable and gives it an initial value, then the second line updates the <code>name</code> variable so that its value is now &quot;Romeo&quot;. You&#39;ll see both values printed in the results area of the playground.</p><figure><img src="https://hackingwithswift.com/img/books/hws/variables-and-constants-1@2x.png" alt="Playground showing “Tim McGraw” and “Romeo” printed out." tabindex="0" loading="lazy"><figcaption>Playground showing “Tim McGraw” and “Romeo” printed out.</figcaption></figure><p>Now, what if we had made that a constant rather than a variable? Well, constants use the <code>let</code> keyword rather than <code>var</code>, so you can change your first line of code to say <code>let name</code> rather than <code>var name</code> like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">UIKit</span></span>
<span class="line"><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Tim McGraw&quot;</span></span></span>
<span class="line">name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Romeo&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But now there&#39;s a problem: Xcode will show a red warning next to line three, and it should have drawn a red underline underneath your code. Xcode’s message is “Cannot assign to value: &#39;name&#39; is a &#39;let&#39; constant”, which is Xcode-speak for &quot;you&#39;re trying to change a constant and you can&#39;t do that.&quot;</p><figure><img src="https://hackingwithswift.com/img/books/hws/variables-and-constants-2@2x.png" alt="Playground showing error on line 3." tabindex="0" loading="lazy"><figcaption>Playground showing error on line 3.</figcaption></figure><p>So, constants are a great way to make a promise to Swift and to yourself that a value won&#39;t change, because if you do try to change it Xcode will refuse to run. Swift developers have a strong preference to use constants wherever possible because it makes your code easier to understand. In fact, Xcode will actually tell you if you make something a variable then never change it!</p><div class="hint-container important"><p class="hint-container-title">Important</p><p>variable and constant names must be unique in your code. You&#39;ll get an error if you try to use the same variable name twice, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Tim McGraw&quot;</span></span></span>
<span class="line"><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Romeo&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>If the playground finds an error in your code, it will either flag up a warning in a red box, or will just refuse to run. You&#39;ll know if the latter has happened because the text in the results pane has gone gray rather than its usual black.</p><figure><img src="https://hackingwithswift.com/img/books/hws/variables-and-constants-3@2x.png" alt="Playground showing error on line 3 due to an invalid redeclaration of &#39;name&#39;." tabindex="0" loading="lazy"><figcaption>Playground showing error on line 3 due to an invalid redeclaration of &#39;name&#39;.</figcaption></figure>`,19);function b(i,k){const e=o("VPCard"),r=o("VidStack");return h(),c("div",null,[a("h1",g,[a("a",m,[a("span",null,d(i.$frontmatter.title)+" 관련",1)])]),t(e,n(s({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,v,t(e,n(s({title:"Variables and constants | Hacking with iOS",desc:"Variables and constants",link:"https://hackingwithswift.com/read/0/2/variables-and-constants",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),t(r,{src:"youtube/NbthZRnz1C4"}),f])}const x=l(u,[["render",b],["__file","02-variables-and-constants.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/read/00/02-variables-and-constants.html","title":"Variables and constants","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Variables and constants","description":"Article(s) > Variables and constants","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Variables and constants"},{"property":"og:description","content":"Variables and constants"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/00/02-variables-and-constants.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/00/02-variables-and-constants.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Variables and constants"}],["meta",{"property":"og:description","content":"Article(s) > Variables and constants"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/variables-and-constants-1@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Variables and constants\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/variables-and-constants-1@2x.png\\",\\"https://hackingwithswift.com/img/books/hws/variables-and-constants-2@2x.png\\",\\"https://hackingwithswift.com/img/books/hws/variables-and-constants-3@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.62,"words":787},"filePathRelative":"hackingwithswift.com/read/00/02-variables-and-constants.md","excerpt":"\\n"}');export{x as comp,S as data};
