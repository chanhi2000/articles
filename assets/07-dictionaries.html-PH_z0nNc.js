import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as s,t as l,e as n,n as t,g as e,f as u,r as i,o as d}from"./app-BgNevrm5.js";const g={},h={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},m=s("nav",{class:"table-of-contents"},[s("ul")],-1),w=s("hr",null,null,-1),f=u(`<p>As you&#39;ve seen, Swift arrays are a collection where you access each item using a numerical index, such as <code>songs[0]</code>. Dictionaries are another common type of collection, but they differ from arrays because they let you access values based on a key you specify.</p><p>To give you an example, let&#39;s imagine how we might store data about a person in an array:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Taylor&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Alison&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Swift&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;December&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;taylorswift.com&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>To read out that person&#39;s middle name, we&#39;d use <code>person[1]</code>, and to read out the month they were born we&#39;d use <code>person[3]</code>. This has a few problems, not least that it&#39;s difficult to remember what index number is assigned to each value in the array! And what happens if the person has no middle name? Chances are all the other values would move down one place, causing chaos in your code.</p><p>With dictionaries we can re-write this to be far more sensible, because rather than arbitrary numbers you get to read and write values using a key you specify. For example:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;first&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Taylor&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;middle&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Alison&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;last&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Swift&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;month&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;December&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;website&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;taylorswift.com&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line">person<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;middle&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line">person<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;month&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://hackingwithswift.com/img/books/hws/dictionaries-1@2x.png" alt="Creating a dictionary, then accessing its members." tabindex="0" loading="lazy"><figcaption>Creating a dictionary, then accessing its members.</figcaption></figure><p>It might help if I use lots of whitespace to break up the dictionary on your screen, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token string-literal"><span class="token string">&quot;first&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Taylor&quot;</span></span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-literal"><span class="token string">&quot;middle&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Alison&quot;</span></span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-literal"><span class="token string">&quot;last&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Swift&quot;</span></span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-literal"><span class="token string">&quot;month&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;December&quot;</span></span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-literal"><span class="token string">&quot;website&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;taylorswift.com&quot;</span></span></span>
<span class="line">            <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">person<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;middle&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line">person<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;month&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, when you make a dictionary you write its key, then a colon, then its value. You can then read any value from the dictionary just by knowing its key, which is much easier to work with.</p><p>As with arrays, you can store a wide variety of values inside dictionaries, although the keys are most commonly strings.</p>`,11);function y(o,b){const a=i("VPCard"),p=i("VidStack");return d(),r("div",null,[s("h1",h,[s("a",k,[s("span",null,l(o.$frontmatter.title)+" 관련",1)])]),n(a,t(e({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),m,w,n(a,t(e({title:"Dictionaries | Hacking with iOS",desc:"Dictionaries",link:"https://hackingwithswift.com/read/0/7/dictionaries",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),n(p,{src:"youtube/lqQ_OM4uPa0"}),f])}const _=c(g,[["render",y],["__file","07-dictionaries.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/read/00/07-dictionaries.html","title":"Dictionaries","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Dictionaries","description":"Article(s) > Dictionaries","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Dictionaries"},{"property":"og:description","content":"Dictionaries"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/00/07-dictionaries.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/00/07-dictionaries.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Dictionaries"}],["meta",{"property":"og:description","content":"Article(s) > Dictionaries"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/dictionaries-1@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dictionaries\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/dictionaries-1@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.4,"words":421},"filePathRelative":"hackingwithswift.com/read/00/07-dictionaries.md","excerpt":"\\n"}');export{_ as comp,x as data};
