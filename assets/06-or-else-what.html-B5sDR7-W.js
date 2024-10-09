import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as n,t as r,e as s,n as t,g as e,f as u,r as o,o as d}from"./app-BgNevrm5.js";const k={},h={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},w=n("nav",{class:"table-of-contents"},[n("ul")],-1),g=n("hr",null,null,-1),v=u(`<p>There remains one problem to fix with our code, and it&#39;s quite a tedious problem. If the word is possible and original and real, we add it to the list of found words then insert it into the table view. But what if the word isn&#39;t possible? Or if it&#39;s possible but not original? In this case, we reject the word and don&#39;t say why, so the user gets no feedback.</p><p>So, the final part of our project is to give users feedback when they make an invalid move. This is tedious because it&#39;s just adding <code>else</code> statements to all the <code>if</code> statements in <code>submit()</code>, each time configuring a message to show to users.</p><p>Here&#39;s the adjusted method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">submit</span><span class="token punctuation">(</span>answer<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> lowerAnswer <span class="token operator">=</span> answer<span class="token punctuation">.</span><span class="token function">lowercased</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> errorTitle<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">let</span> errorMessage<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token function">isPossible</span><span class="token punctuation">(</span>word<span class="token punctuation">:</span> lowerAnswer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token function">isOriginal</span><span class="token punctuation">(</span>word<span class="token punctuation">:</span> lowerAnswer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token function">isReal</span><span class="token punctuation">(</span>word<span class="token punctuation">:</span> lowerAnswer<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                usedWords<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>answer<span class="token punctuation">,</span> at<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">let</span> indexPath <span class="token operator">=</span> <span class="token class-name">IndexPath</span><span class="token punctuation">(</span>row<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> section<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">                tableView<span class="token punctuation">.</span><span class="token function">insertRows</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token punctuation">[</span>indexPath<span class="token punctuation">]</span><span class="token punctuation">,</span> with<span class="token punctuation">:</span> <span class="token punctuation">.</span>automatic<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">return</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                errorTitle <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Word not recognised&quot;</span></span></span>
<span class="line">                errorMessage <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;You can&#39;t just make them up, you know!&quot;</span></span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            errorTitle <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Word used already&quot;</span></span></span>
<span class="line">            errorMessage <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Be more original!&quot;</span></span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">guard</span> <span class="token keyword">let</span> title <span class="token operator">=</span> title<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">lowercased</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line">        errorTitle <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Word not possible&quot;</span></span></span>
<span class="line">        errorMessage <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;You can&#39;t spell that word from </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">title</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> errorTitle<span class="token punctuation">,</span> message<span class="token punctuation">:</span> errorMessage<span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span></span>
<span class="line">    ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span><span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;OK&quot;</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, every <code>if</code> statement now has a matching <code>else</code> statement so that the user gets appropriate feedback. All the <code>else</code>s are effectively the same (albeit with changing text): set the values for <code>errorTitle</code> and <code>errorMessage</code> to something useful for the user. The only interesting exception is the last one, where we use string interpolation to show the view controller&#39;s title as a lowercase string.</p><p>If the user enters a valid answer, a call to <code>return</code> forces Swift to exit the method immediately once the table has been updated. This is helpful, because at the end of the method there is code to create a new <code>UIAlertController</code> with the error title and message that was set, add an OK button without a handler (i.e., just dismiss the alert), then show the alert. So, this error will only be shown if something went wrong.</p><p>This demonstrates one important tip about Swift constants: both <code>errorTitle</code> and <code>errorMessage</code> were declared as constants, which means their value cannot be changed once set. I didn&#39;t give either of them an initial value, and that&#39;s OK – Swift lets you do this as long as you do provide a value before the constants are read, and also as long as you don&#39;t try to change the value again later on.</p><p>Other than that, your project is done. Go and play!</p>`,8);function f(p,b){const a=o("VPCard"),i=o("VidStack");return d(),c("div",null,[n("h1",h,[n("a",m,[n("span",null,r(p.$frontmatter.title)+" 관련",1)])]),s(a,t(e({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,g,s(a,t(e({title:"Or else what? | Hacking with iOS",desc:"Or else what?",link:"https://hackingwithswift.com/read/5/6/or-else-what",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),s(i,{src:"youtube/Dh__ZeZJbOg"}),v])}const O=l(k,[["render",f],["__file","06-or-else-what.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/read/05/06-or-else-what.html","title":"Or else what?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Or else what?","description":"Article(s) > Or else what?","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Or else what?"},{"property":"og:description","content":"Or else what?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/05/06-or-else-what.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/05/06-or-else-what.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Or else what?"}],["meta",{"property":"og:description","content":"Article(s) > Or else what?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Or else what?\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.97,"words":592},"filePathRelative":"hackingwithswift.com/read/05/06-or-else-what.md","excerpt":"\\n"}');export{O as comp,S as data};
