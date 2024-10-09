import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as n,t as m,e as s,n as k,g as h,d as a,w as i,a as w,f as t,r as e,o as f}from"./app-BgNevrm5.js";const g={},y={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},v=n("nav",{class:"table-of-contents"},[n("ul")],-1),_=n("hr",null,null,-1),x=n("figure",null,[n("img",{src:"https://hackingwithswift.com/uploads/swift-evolution-4.jpg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),S={href:"https://github.com/apple/swift-evolution/blob/master/proposals/0216-dynamic-callable.md",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"apple/swift-evolution",-1),A=n("code",null,"@dynamicCallable",-1),I=t(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>numberOfZeroes<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Into this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">dynamicallyCall</span><span class="token punctuation">(</span>withKeywordArguments<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;numberOfZeroes&quot;</span></span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,3),D=n("code",null,"@dynamicCallable",-1),j=n("code",null,"@dynamicMemberLookup",-1),P=t(`<p>To add this functionality to your own types, you need to add the <code>@dynamicCallable</code> attribute plus one or both of these methods:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">dynamicallyCall</span><span class="token punctuation">(</span>withArguments args<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Double</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">dynamicallyCall</span><span class="token punctuation">(</span>withKeywordArguments args<span class="token punctuation">:</span> <span class="token class-name">KeyValuePairs</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Int</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Double</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first of those is used when you call the type without parameter labels (e.g. <code>a(b, c)</code>), and the second is used when you <em>do</em> provide labels (e.g. <code>a(b: cat, c: dog)</code>).</p><p><code>@dynamicCallable</code> is really flexible about which data types its methods accept and return, allowing you to benefit from all of Swift’s type safety while still having some wriggle room for advanced usage. So, for the first method (no parameter labels) you can use anything that conforms to <code>ExpressibleByArrayLiteral</code> such as arrays, array slices, and sets, and for the second method (with parameter labels) you can use anything that conforms to <code>ExpressibleByDictionaryLiteral</code> such as dictionaries and key value pairs.</p>`,4),R={class:"hint-container note"},O=n("p",{class:"hint-container-title"},"Note",-1),K=n("code",null,"KeyValuePairs",-1),N=n("code",null,"@dynamicCallable",-1),Z=t(`<p>As well as accepting a variety of inputs, you can also provide multiple overloads for a variety of outputs – one might return a string, one an integer, and so on. As long as Swift is able to resolve which one is used, you can mix and match all you want.</p><p>Let’s look at an example. First, here’s a <code>RandomNumberGenerator</code> struct that generates numbers between 0 and a certain maximum, depending on what input was passed in:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">RandomNumberGenerator</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">generate</span><span class="token punctuation">(</span>numberOfZeroes<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Double</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> maximum <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>numberOfZeroes<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token operator">...</span>maximum<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To switch that over to <code>@dynamicCallable</code> we’d write something like this instead:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@dynamicCallable</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">RandomNumberGenerator</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">dynamicallyCall</span><span class="token punctuation">(</span>withKeywordArguments args<span class="token punctuation">:</span> <span class="token class-name">KeyValuePairs</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Int</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Double</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> numberOfZeroes <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>first<span class="token operator">?</span><span class="token punctuation">.</span>value <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">let</span> maximum <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> numberOfZeroes<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token operator">...</span>maximum<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That method can be called with any number of parameters, or perhaps zero, so we read the first value carefully and use nil coalescing to make sure there’s a sensible default.</p><p>We can now create an instance of <code>RandomNumberGenerator</code> and call it like a function:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> random <span class="token operator">=</span> <span class="token class-name">RandomNumberGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span>numberOfZeroes<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you had used <code>dynamicallyCall(withArguments:)</code> instead – or at the same time, because you can have them both a single type – then you’d write this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@dynamicCallable</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">RandomNumberGenerator</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">dynamicallyCall</span><span class="token punctuation">(</span>withArguments args<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Double</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> numberOfZeroes <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">let</span> maximum <span class="token operator">=</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> numberOfZeroes<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token operator">...</span>maximum<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> random <span class="token operator">=</span> <span class="token class-name">RandomNumberGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are some important rules to be aware of when using <code>@dynamicCallable</code>:</p><ul><li>You can apply it to structs, enums, classes, and protocols.</li><li>If you implement <code>withKeywordArguments:</code> and don’t implement <code>withArguments:</code>, your type can still be called without parameter labels – you’ll just get empty strings for the keys.</li><li>If your implementations of <code>withKeywordArguments:</code> or <code>withArguments:</code> are marked as throwing, calling the type will also be throwing.</li><li>You can’t add <code>@dynamicCallable</code> to an extension, only the primary definition of a type.</li><li>You can still add other methods and properties to your type, and use them as normal.</li></ul><p>Perhaps more importantly, there is no support for method resolution, which means we must call the type directly (e.g. <code>random(numberOfZeroes: 5)</code>) rather than calling specific methods on the type (e.g. <code>random.generate(numberOfZeroes: 5)</code>). There is already some discussion on adding the latter using a method signature such as this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">dynamicallyCallMethod</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> withKeywordArguments<span class="token punctuation">:</span> <span class="token class-name">KeyValuePairs</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Int</span><span class="token operator">&gt;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If that became possible in future Swift versions it might open up some very interesting possibilities for test mocking.</p><p>In the meantime, <code>@dynamicCallable</code> is not likely to be widely popular, but it <em>is</em> hugely important for a small number of people who want interactivity with Python, JavaScript, and other languages.</p>`,16);function T(l,V){const p=e("VPCard"),c=e("SiteInfo"),r=e("FontIcon"),o=e("RouteLink");return f(),d("div",null,[n("h1",y,[n("a",b,[n("span",null,m(l.$frontmatter.title)+" 관련",1)])]),s(p,k(h({title:"Swift > Article(s)",desc:"Article(s)",link:"/programming/swift/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),v,_,s(c,{name:"How to use @dynamicCallable in Swift – Hacking with Swift",desc:"Swift 5.0 introduces a new way to work with dynamic languages",url:"https://hackingwithswift.com/articles/134/how-to-use-dynamiccallable-in-swift",logo:"https://hackingwithswift.com/favicon.svg",preview:"https://hackingwithswift.com/uploads/swift-evolution-4.jpg"}),x,n("p",null,[n("a",S,[a("SE-0216 ("),s(r,{icon:"iconfont icon-github"}),C,a(")")]),a(" adds a new "),A,a(" attribute to Swift, which brings with it the ability to mark a type as being directly callable. It’s syntactic sugar rather than any sort of compiler magic, effectively transforming this code:")]),I,n("p",null,[a("Previously I wrote about a "),s(o,{to:"/hackingwithswift.com/how-to-use-dynamic-member-lookup-in-swift.html"},{default:i(()=>[a("feature in Swift 4.2 called @dynamicMemberLookup")]),_:1}),a(". "),D,a(" is the natural extension of "),j,a(", and serves the same purpose: to make it easier for Swift code to work alongside dynamic languages such as Python and JavaScript.")]),P,n("div",R,[O,n("p",null,[a("If you haven’t used "),K,a(" before, now would be a good time to learn what they are because they are extremely useful with "),N,a(". Find out more here: "),s(o,{to:"/hackingwithswift.com/example-code/language/what-are-keyvaluepairs.html"},{default:i(()=>[a("What are KeyValuePairs?")]),_:1})]),w(" TODO: add VPCard ")]),Z])}const G=u(g,[["render",T],["__file","how-to-use-dynamiccallable-in-swift.html.vue"]]),L=JSON.parse('{"path":"/hackingwithswift.com/how-to-use-dynamiccallable-in-swift.html","title":"How to use @dynamicCallable in Swift","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to use @dynamicCallable in Swift","description":"Swift 5.0 introduces a new way to work with dynamic languages","icon":"fa-brands fa-swift","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swift-5.0","ios","xcode"],"head":[[{"meta":null},{"property":"og:title","content":"How to use @dynamicCallable in Swift"},{"property":"og:description","content":"Swift 5.0 introduces a new way to work with dynamic languages"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/how-to-use-dynamiccallable-in-swift.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/how-to-use-dynamiccallable-in-swift.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to use @dynamicCallable in Swift"}],["meta",{"property":"og:description","content":"Swift 5.0 introduces a new way to work with dynamic languages"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/uploads/swift-evolution-4.jpg"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://hackingwithswift.com/uploads/swift-evolution-4.jpg"}],["meta",{"name":"twitter:image:alt","content":"How to use @dynamicCallable in Swift"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swift-5.0"}],["meta",{"property":"article:tag","content":"ios"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:published_time","content":"2018-11-27T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to use @dynamicCallable in Swift\\",\\"image\\":[\\"https://hackingwithswift.com/uploads/swift-evolution-4.jpg\\"],\\"datePublished\\":\\"2018-11-27T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/programming/swift/articles/README.md","date":"2018-11-27T00:00:00.000Z","isOriginal":false,"cover":"https://hackingwithswift.com/uploads/swift-evolution-4.jpg"},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.07,"words":920},"filePathRelative":"hackingwithswift.com/how-to-use-dynamiccallable-in-swift.md","localizedDate":"2018년 11월 27일","excerpt":"\\n"}');export{G as comp,L as data};
