import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as e,t as h,e as s,n as i,g as l,d as n,f as t,r as a,o as k}from"./app-BgNevrm5.js";const m={},f={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},w=e("nav",{class:"table-of-contents"},[e("ul")],-1),b=e("hr",null,null,-1),v=t(`<p><code>NSCoding</code> is a great way to read and write data when using <code>UserDefaults</code>, and is the most common option when you must write Swift code that lives alongside Objective-C code.</p><p>However, if you’re <em>only</em> writing Swift, the <code>Codable</code> protocol is much easier. We already used it to load petition JSON back in project 7, but now we’ll be loading <em>and</em> saving JSON.</p><p>There are three primary differences between the two solutions:</p><ol><li>The <code>Codable</code> system works on both classes and structs. We made <code>Person</code> a class because <code>NSCoding</code> only works with classes, but if you didn’t care about Objective-C compatibility you could make it a struct and use <code>Codable</code> instead.</li><li>When we implemented <code>NSCoding</code> in the previous chapter we had to write <code>encode()</code> and <code>init()</code> calls ourself. With <code>Codable</code> this isn’t needed unless you need more precise control - it does the work for you.</li><li>When you encode data using <code>Codable</code> you can save to the same format that <code>NSCoding</code> uses if you want, but a much more pleasant option is JSON – <code>Codable</code> reads and writes JSON natively.</li></ol><p>All three of those combined means that you can define a struct to hold data, and have Swift create instances of that struct directly from JSON with no extra work from you.</p><p>Anyway, to demonstrate more of <code>Codable</code> in action I’d like you to close project12a and open project12b – this should be identical to project 10, because it doesn’t contain any of the <code>NSCoding</code> changes.</p><p>First, let’s modify the <code>Person</code> class so that it conforms to <code>Codable</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">NSObject</span><span class="token punctuation">,</span> <span class="token class-name">Codable</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,8),y=e("code",null,"Codable",-1),j=e("code",null,"ViewController.swift",-1),_=e("code",null,"people",-1),S=t("<p>As with <code>NSCoding</code> we’re going to create a single <code>save()</code> method we can use anywhere that&#39;s needed. This time it’s going to use the <code>JSONEncoder</code> class to convert our <code>people</code> array into a <code>Data</code> object, which can then be saved to <code>UserDefaults</code>. This conversion might fail, so we’re going to use <code>if let</code> and <code>try?</code> so that we save data only when the JSON conversion was successful.</p>",1),C=e("code",null,"ViewController.swift",-1),x=t(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> jsonEncoder <span class="token operator">=</span> <span class="token class-name">JSONEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> savedData <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> jsonEncoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>people<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> defaults <span class="token operator">=</span> <span class="token class-name">UserDefaults</span><span class="token punctuation">.</span>standard</span>
<span class="line">        defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>savedData<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;people&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Failed to save people.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Just like with the <code>NSCoding</code> example you need to modify our collection view&#39;s <code>didSelectItemAt</code> method so that you call <code>self?.save()</code> just after calling <code>self.collectionView.reloadData()</code>. Again, remember that adding <code>self</code> is required because we&#39;re inside a closure. You then need to modify the image picker&#39;s <code>didFinishPickingMediaWithInfo</code> method so that it calls <code>save()</code> just before the end of the method.</p><p>Finally, we need to load the array back from disk when the app runs, so add this code to <code>viewDidLoad()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> defaults <span class="token operator">=</span> <span class="token class-name">UserDefaults</span><span class="token punctuation">.</span>standard</span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token keyword">let</span> savedPeople <span class="token operator">=</span> defaults<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;people&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> jsonDecoder <span class="token operator">=</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">        people <span class="token operator">=</span> <span class="token keyword">try</span> jsonDecoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">Person</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> savedPeople<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Failed to load people&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This code is effectively the <code>save()</code> method in reverse: we use the <code>object(forKey:)</code> method to pull out an optional <code>Data</code>, using <code>if let</code> and <code>as?</code> to unwrap it. We then give that to an instance of <code>JSONDecoder</code> to convert it back to an object graph – i.e., our array of <code>Person</code> objects.</p><p>Once again, note the interesting syntax for <code>decode()</code> method: its first parameter is <code>[Person].self</code>, which is Swift’s way of saying “attempt to create an array of <code>Person</code> objects.” This is why we don’t need a typecast when assigning to <code>people</code> – that method will automatically return <code>[People]</code>, or if the conversion fails then the <code>catch</code> block will be executed instead.</p>`,6);function P(p,N){const o=a("VPCard"),d=a("VidStack"),c=a("FontIcon");return k(),u("div",null,[e("h1",f,[e("a",g,[e("span",null,h(p.$frontmatter.title)+" 관련",1)])]),s(o,i(l({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,b,s(o,i(l({title:"Fixing Project 10: Codable | Hacking with iOS",desc:"Fixing Project 10: Codable",link:"https://hackingwithswift.com/read/12/4/fixing-project-10-codable",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),s(d,{src:"youtube/Jr6YcWlGHvg"}),v,e("p",null,[n("…and that’s it. Yes, just adding "),y,n(" to the class definition is enough to tell Swift we want to read and write this thing. So, now we can go back to "),s(c,{icon:"fa-brands fa-swift"}),j,n(" and add code to load and save the "),_,n(" array.")]),S,e("p",null,[n("Add this method to "),s(c,{icon:"fa-brands fa-swift"}),C,n(" now:")]),x])}const D=r(m,[["render",P],["__file","04-fixing-project-10-codable.html.vue"]]),J=JSON.parse('{"path":"/hackingwithswift.com/read/12/04-fixing-project-10-codable.html","title":"Fixing Project 10: Codable","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Fixing Project 10: Codable","description":"Article(s) > Fixing Project 10: Codable","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Fixing Project 10: Codable"},{"property":"og:description","content":"Fixing Project 10: Codable"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/12/04-fixing-project-10-codable.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/12/04-fixing-project-10-codable.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Fixing Project 10: Codable"}],["meta",{"property":"og:description","content":"Article(s) > Fixing Project 10: Codable"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fixing Project 10: Codable\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.65,"words":795},"filePathRelative":"hackingwithswift.com/read/12/04-fixing-project-10-codable.md","excerpt":"\\n"}');export{D as comp,J as data};
