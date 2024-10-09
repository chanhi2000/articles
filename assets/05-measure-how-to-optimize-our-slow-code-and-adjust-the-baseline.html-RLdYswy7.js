import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as e,t as d,e as n,n as i,g as c,d as s,f as t,r as l,o as h}from"./app-BgNevrm5.js";const m={},w={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},f=e("nav",{class:"table-of-contents"},[e("ul")],-1),g=e("hr",null,null,-1),b=t("<p>You might have noticed there&#39;s a pre-written method called <code>setup()</code> in our unit tests, which contains this comment: &quot;Put setup code here. This method is called before the invocation of each test method in the class.&quot; Why, then, do we have <code>let playData = PlayData()</code> in both our tests – couldn&#39;t that go into <code>setup()</code> to avoid repetition?</p><p>Well, no, and you&#39;re about to see why. You will probably have noticed that our new word frequency code has slowed down our app quite a bit. Even when running in the iOS Simulator, using the full power of your Mac, this code now takes about two seconds to run – try to imagine how much slower it would be on a real device!</p><p>Of course, this is all a clever ruse to teach you more things, and here I want to teach you how to use XCTest to check performance. Our new word counting code is slow, but the only reliable way to ensure it gets faster when we make changes is to create a new test that times how long it takes for our <code>PlayData</code> object to be created. This is why we can&#39;t create it inside the <code>setup()</code> method: we need to create it as part of a measurement in this next test, as you&#39;ll see.</p><p>XCTest makes performance testing extraordinarily easy: you give it a closure to run, and it will execute that code 10 times in a row. You&#39;ll then get a report back of how long the call took on average, what the standard deviation was (how much variance there was between runs), and even how fast each of those 10 runs performed if you want the details.</p>",4),y=e("code",null,"Project39Tests.swift",-1),v=t(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">testWordsLoadQuickly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    measure <span class="token punctuation">{</span></span>
<span class="line">        <span class="token omit keyword">_</span> <span class="token operator">=</span> <span class="token class-name">PlayData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Were you expecting something more complicated? I told you it was easy and I meant it! That tiny amount of code is all it takes: assigning a new <code>PlayData</code> object to <code>_</code> will load the file, split it up by lines and count the unique words, so our test couldn&#39;t be any simpler.</p><p>Click the diamond in the gutter to run this performance test now, but be warned: it will take a little while because that closure is run 10 times. For me, each run took about 2 seconds, so the whole thing took about 20 seconds. If you have a slower computer, you might need to wait for a minute or two.</p><p>Once the test finishes you&#39;ll see a green arrow to show it succeeded, but that doesn&#39;t mean much right now because the test can&#39;t ever fail. But you&#39;ll also see something new: a gray line that tells you the results. On the right of the line it will say something like &quot;Time: 2.060 sec (3% STDDEV)&quot; so you can see the mean average time it took to run the code and also the standard deviation.</p><figure><img src="https://hackingwithswift.com/img/books/hws/39-9@2x.png" alt="Performance tests offer different information to regular tests. As you can see here, you&#39;ll see the mean average time as well as the standard deviation, which helps you identify performance hotspots." tabindex="0" loading="lazy"><figcaption>Performance tests offer different information to regular tests. As you can see here, you&#39;ll see the mean average time as well as the standard deviation, which helps you identify performance hotspots.</figcaption></figure><p>On the left of the line, in the gutter next to the line number, is a small gray diamond – clicking that will show you pop up information about all 10 runs. Also in that pop up is an important button that I want you to click now: Set Baseline. That marks your previous test run as the baseline against which future test runs should be compared to see whether performance has improved or worsened.</p><figure><img src="https://hackingwithswift.com/img/books/hws/39-10@2x.png" alt="You can see detailed performance data, and set a baseline, by clicking the tiny gray diamond on the left of the standard deviation line." tabindex="0" loading="lazy"><figcaption>You can see detailed performance data, and set a baseline, by clicking the tiny gray diamond on the left of the standard deviation line.</figcaption></figure><p>Now that you&#39;ve set a baseline, run the test again and wait for it to complete. When it finishes, you should see another green checkmark and you might also see a slight natural variance in the performance results. But now the checkmark <em>means</em> something: it means your code executed within a reasonable variance of the baseline, which in Xcode&#39;s eyes means that the deviation from the baseline was under 10%. If your code becomes a great deal slower, Xcode will warn you because it means something major has changed.</p><p>I promised earlier that I was going to make you write some bad code, and that it was going to be fixed. I hope you can see why: even though our loading code is very simple, it takes an extremely long time to load and we need to make it faster. In doing so you&#39;ll also get to see how XCTest helps you identify major performance changes and adjust your baseline as needed.</p><p>As a reminder, here&#39;s the slow code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">for</span> word <span class="token keyword">in</span> allWords <span class="token punctuation">{</span></span>
<span class="line">    wordCounts<span class="token punctuation">[</span>word<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">allWords <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>wordCounts<span class="token punctuation">.</span>keys<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You might wonder how we could optimize something so trivial, but it turns out we can take out most of the code while also making it run significantly faster. This is possible thanks to one of my favorite iOS classes: <code>NSCountedSet</code>. This is a set data type, which means that items can only be added once. But it&#39;s a <em>specialized</em> set object: it keeps track of how many times items you tried to add and remove each item, which means it can handle de-duplicating our words while storing how often they are used. Did I also mention it&#39;s fast?</p><p>To use <code>NSCountedSet</code> we need to make a few changes. First, change the wordCounts property of PlayData to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> wordCounts<span class="token punctuation">:</span> <span class="token class-name">NSCountedSet</span><span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now remove all the slow code (the nine lines I showed you above) and put these two in their place:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">wordCounts <span class="token operator">=</span> <span class="token class-name">NSCountedSet</span><span class="token punctuation">(</span>array<span class="token punctuation">:</span> allWords<span class="token punctuation">)</span></span>
<span class="line">allWords <span class="token operator">=</span> wordCounts<span class="token punctuation">.</span>allObjects <span class="token keyword">as</span><span class="token operator">!</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The first line creates a counted set from all the words, which immediately de-duplicates and counts them all. The second line updates the <code>allWords</code> array to be the words from the counted set, thus ensuring they are unique.</p>`,17),_=e("code",null,"cellForRowAt",-1),j=e("code",null,"ViewController.swift",-1),C=e("code",null,"count(for:)",-1),x=t(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">cell<span class="token punctuation">.</span>detailTextLabel<span class="token operator">!</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">playData<span class="token punctuation">.</span>wordCounts<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> word<span class="token punctuation">)</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,1),S=e("code",null,"testWordCountsAreCorrect()",-1),q=e("code",null,"Project39Tests.swift",-1),T=t(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">testWordCountsAreCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> playData <span class="token operator">=</span> <span class="token class-name">PlayData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>playData<span class="token punctuation">.</span>wordCounts<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;home&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">174</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Home does not appear 174 times&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>playData<span class="token punctuation">.</span>wordCounts<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;fun&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Fun does not appear 4 times&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>playData<span class="token punctuation">.</span>wordCounts<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;mortal&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Mortal does not appear 41 times&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s it: click the green checkmark next to <code>testWordsLoadQuickly()</code> to re-run the performance test, and you&#39;ll see it now runs two or even three times faster. Xcode won&#39;t mark this test as a failure, though: Xcode only considers a test to be failed if it performs at least 10% <em>slower</em> than the baseline.</p><p>Our new code is significantly faster, and works just as well, so we&#39;re going to update our measurement baseline so it&#39;s used in the future. To do that, click the small gray diamond in the gutter at the end of <code>testWordsLoadQuickly()</code>, then click its Edit button. An Accept button will appear, which you should click to transfer the latest result to the baseline, then finally click Save.</p><p>If you were wondering, Xcode does two neat things with these benchmarks. First, they are checked into source control, which means they are shared with other team members. Second, they are stored against specific device configurations, which means Xcode won&#39;t warn you when your iPhone 5s performs slower than an iPhone 8.</p><p>Before we&#39;re done with this chapter, there&#39;s one more thing I want to do: sort the array so that the most frequent words appear at the top of the table. This can be done with the <code>sort()</code> method, which takes a closure describing how objects should be sorted. Swift will call this closure with a pair of words, and the closure should return true if the first word is sorted before the second. Using all the shorthand techniques you learned earlier, this means returning true if <code>$0</code> should be sorted before <code>$1</code>.</p><p>Replace these two lines:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">wordCounts <span class="token operator">=</span> <span class="token class-name">NSCountedSet</span><span class="token punctuation">(</span>array<span class="token punctuation">:</span> allWords<span class="token punctuation">)</span></span>
<span class="line">allWords <span class="token operator">=</span> wordCounts<span class="token punctuation">.</span>allObjects <span class="token keyword">as</span><span class="token operator">!</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>…with these:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">wordCounts <span class="token operator">=</span> <span class="token class-name">NSCountedSet</span><span class="token punctuation">(</span>array<span class="token punctuation">:</span> allWords<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> sorted <span class="token operator">=</span> wordCounts<span class="token punctuation">.</span>allObjects<span class="token punctuation">.</span>sorted <span class="token punctuation">{</span> wordCounts<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token short-argument">$0</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> wordCounts<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token short-argument">$1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line">allWords <span class="token operator">=</span> sorted <span class="token keyword">as</span><span class="token operator">!</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Remember, that closure needs to accept two strings (<code>$0</code> and <code>$1</code>) and needs to return true if the first string comes before the second. We call <code>count(for:)</code> on each of those strings, so this code will return true (&quot;sort before&quot;) if the count for <code>$0</code> is higher than the code for <code>$1</code> – perfect.</p><p>If you run the app now you&#39;ll see the most frequently used words appear at the top – good job! Note, though, that running this sort takes a little time, so make sure you update the baseline for <code>testWordsLoadQuickly()</code> to reflect that change.</p><figure><img src="https://hackingwithswift.com/img/books/hws/39-11@2x.png" alt="The table view is now finished: it shows all words, with no duplicates, and sorted by frequency descending." tabindex="0" loading="lazy"><figcaption>The table view is now finished: it shows all words, with no duplicates, and sorted by frequency descending.</figcaption></figure>`,12);function z(p,A){const o=l("VPCard"),a=l("FontIcon");return h(),u("div",null,[e("h1",w,[e("a",k,[e("span",null,d(p.$frontmatter.title)+" 관련",1)])]),n(o,i(c({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,g,n(o,i(c({title:"measure(): How to optimize our slow code and adjust the baseline | Hacking with iOS",desc:"measure(): How to optimize our slow code and adjust the baseline",link:"https://hackingwithswift.com/read/39/5/measure-how-to-optimize-our-slow-code-and-adjust-the-baseline",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,e("p",null,[s("Let's write a performance test now – please add this to "),n(a,{icon:"fa-brands fa-swift"}),y,s(":")]),v,e("p",null,[s("Two more changes. First, in the "),_,s(" method of "),n(a,{icon:"fa-brands fa-swift"}),j,s(" we need to use the "),C,s(" method to find out how often a word was used:")]),x,e("p",null,[s("Then we need to make the same change in the "),S,s(" method of "),n(a,{icon:"fa-brands fa-swift"}),q,s(":")]),T])}const W=r(m,[["render",z],["__file","05-measure-how-to-optimize-our-slow-code-and-adjust-the-baseline.html.vue"]]),D=JSON.parse('{"path":"/hackingwithswift.com/read/39/05-measure-how-to-optimize-our-slow-code-and-adjust-the-baseline.html","title":"measure(): How to optimize our slow code and adjust the baseline","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"measure(): How to optimize our slow code and adjust the baseline","description":"Article(s) > measure(): How to optimize our slow code and adjust the baseline","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > measure(): How to optimize our slow code and adjust the baseline"},{"property":"og:description","content":"measure(): How to optimize our slow code and adjust the baseline"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/39/05-measure-how-to-optimize-our-slow-code-and-adjust-the-baseline.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/39/05-measure-how-to-optimize-our-slow-code-and-adjust-the-baseline.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"measure(): How to optimize our slow code and adjust the baseline"}],["meta",{"property":"og:description","content":"Article(s) > measure(): How to optimize our slow code and adjust the baseline"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/39-9@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"measure(): How to optimize our slow code and adjust the baseline\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/39-9@2x.png\\",\\"https://hackingwithswift.com/img/books/hws/39-10@2x.png\\",\\"https://hackingwithswift.com/img/books/hws/39-11@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":5.79,"words":1737},"filePathRelative":"hackingwithswift.com/read/39/05-measure-how-to-optimize-our-slow-code-and-adjust-the-baseline.md","excerpt":"\\n"}');export{W as comp,D as data};
