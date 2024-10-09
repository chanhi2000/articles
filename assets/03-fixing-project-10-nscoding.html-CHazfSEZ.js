import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as e,t as h,e as s,n as o,g as c,d as n,f as i,r as a,o as k}from"./app-BgNevrm5.js";const g={},m={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},f=e("nav",{class:"table-of-contents"},[e("ul")],-1),y=e("hr",null,null,-1),b=i(`<p>You&#39;ve just learned all the core basics of working with <code>UserDefaults</code>, but we&#39;re just getting started. You see, above and beyond integers, dates, strings, arrays and so on, you can also save any kind of data inside <code>UserDefaults</code> as long as you follow some rules.</p><p>What happens is simple: you use the <code>archivedData()</code> method of <code>NSKeyedArchiver</code>, which turns an object graph into a <code>Data</code> object, then write that to <code>UserDefaults</code> as if it were any other object. If you were wondering, “object graph” means “your object, plus any objects it refers to, plus any objects those objects refer to, and so on.”</p><p>The rules are very simple:</p><ol><li>All your data types must be one of the following: boolean, integer, float, double, string, array, dictionary, <code>Date</code>, or a class that fits rule 2.</li><li>If your data type is a class, it must conform to the <code>NSCoding</code> protocol, which is used for archiving object graphs.</li><li>If your data type is an array or dictionary, all the keys and values must match rule 1 or rule 2.</li></ol><p>Many of Apple&#39;s own classes support <code>NSCoding</code>, including but not limited to: <code>UIColor</code>, <code>UIImage</code>, <code>UIView</code>, <code>UILabel</code>, <code>UIImageView</code>, <code>UITableView</code>, <code>SKSpriteNode</code> and many more. But your own classes do not, at least not by default. If we want to save the <code>people</code> array to <code>UserDefaults</code> we&#39;ll need to conform to the <code>NSCoding</code> protocol.</p><p>The first step is to modify your <code>Person</code> class to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">NSObject</span><span class="token punctuation">,</span> <span class="token class-name">NSCoding</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>When we were working on this code in project 10, there were two outstanding questions:</p><ul><li>Why do we need a class here when a struct will do just as well? (And in fact better, because structs come with a default initializer!)</li><li>Why do we need to inherit from <code>NSObject</code>?</li></ul><p>It&#39;s time for the answers to become clear. You see, working with <code>NSCoding</code> requires you to use objects, or, in the case of strings, arrays and dictionaries, structs that are interchangeable with objects. If we made the <code>Person</code> class into a struct, we couldn&#39;t use it with <code>NSCoding</code>.</p><p>The reason we inherit from <code>NSObject</code> is again because it&#39;s required to use <code>NSCoding</code> – although cunningly Swift won&#39;t mention that to you, your app will just crash.</p><p>Once you conform to the <code>NSCoding</code> protocol, you&#39;ll get compiler errors because the protocol requires you to implement two methods: a new initializer and <code>encode()</code>.</p><p>We need to write some more code to fix the problems, and although the code is very similar to what you&#39;ve already seen in <code>UserDefaults</code>, it has two new things you need to know about.</p><p>First, you&#39;ll be using a new class called <code>NSCoder</code>. This is responsible for both encoding (writing) and decoding (reading) your data so that it can be used with <code>UserDefaults</code>.</p><p>Second, the new initializer must be declared with the <code>required</code> keyword. This means &quot;if anyone tries to subclass this class, they are required to implement this method.&quot; An alternative to using <code>required</code> is to declare that your class can never be subclassed, known as a <em>final class</em>, in which case you don&#39;t need <code>required</code> because subclassing isn&#39;t possible. We&#39;ll be using <code>required</code> here.</p><p>Add these two methods to the <code>Person</code> class:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">required</span> <span class="token keyword">init</span><span class="token punctuation">(</span>coder aDecoder<span class="token punctuation">:</span> <span class="token class-name">NSCoder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> aDecoder<span class="token punctuation">.</span><span class="token function">decodeObject</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;name&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">String</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span></span>
<span class="line">    image <span class="token operator">=</span> aDecoder<span class="token punctuation">.</span><span class="token function">decodeObject</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;image&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">String</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">encode</span><span class="token punctuation">(</span>with aCoder<span class="token punctuation">:</span> <span class="token class-name">NSCoder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    aCoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;name&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    aCoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>image<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;image&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The initializer is used when loading objects of this class, and <code>encode()</code> is used when saving. The code is very similar to using <code>UserDefaults</code>, but here we’re adding <code>as?</code> typecasting and nil coalescing just in case we get invalid data back.</p>`,18),v=e("code",null,"Person",-1),j=e("code",null,"NSCoding",-1),S=e("code",null,"ViewController.swift",-1),N=e("code",null,"people",-1),_=i(`<p>Let&#39;s start with writing, because once you understand that the reading code will make much more sense. As I said earlier, you can write <code>Data</code> objects to <code>UserDefaults</code>, but we don&#39;t currently have a <code>Data</code> object – we just have an array.</p><p>Fortunately, the <code>archivedData()</code> method of <code>NSKeyedArchiver</code> turns an object graph into a <code>Data</code> object using those <code>NSCoding</code> methods we just added to our class. Because we make changes to the array by adding people or by renaming them, let&#39;s create a single <code>save()</code> method we can use anywhere that&#39;s needed:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> savedData <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> <span class="token class-name">NSKeyedArchiver</span><span class="token punctuation">.</span><span class="token function">archivedData</span><span class="token punctuation">(</span>withRootObject<span class="token punctuation">:</span> people<span class="token punctuation">,</span> requiringSecureCoding<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> defaults <span class="token operator">=</span> <span class="token class-name">UserDefaults</span><span class="token punctuation">.</span>standard</span>
<span class="line">        defaults<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>savedData<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;people&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>So: line 1 is what converts our array into a <code>Data</code> object, then lines 2 and 3 save that data object to <code>UserDefaults</code>. You now just need to call that <code>save()</code> method when we change a person&#39;s name or when we import a new picture.</p><p>You need to modify our collection view&#39;s <code>didSelectItemAt</code> method so that you call <code>self.save()</code> just after calling <code>self.collectionView.reloadData()</code>. Remember, the <code>self</code> is required because we&#39;re inside a closure. You then need to modify the image picker&#39;s <code>didFinishPickingMediaWithInfo</code> method so that it calls <code>save()</code> just before the end of the method.</p><p>And that&#39;s it – we only change the data in two places, and both now have a call to <code>save()</code>.</p><p>Finally, we need to load the array back from disk when the app runs, so add this code to <code>viewDidLoad()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> defaults <span class="token operator">=</span> <span class="token class-name">UserDefaults</span><span class="token punctuation">.</span>standard</span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token keyword">let</span> savedPeople <span class="token operator">=</span> defaults<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;people&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> decodedPeople <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> <span class="token class-name">NSKeyedUnarchiver</span><span class="token punctuation">.</span><span class="token function">unarchiveTopLevelObjectWithData</span><span class="token punctuation">(</span>savedPeople<span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token class-name">Person</span><span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">        people <span class="token operator">=</span> decodedPeople</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This code is effectively the <code>save()</code> method in reverse: we use the <code>object(forKey:)</code> method to pull out an optional <code>Data</code>, using <code>if let</code> and <code>as?</code> to unwrap it. We then give that to the <code>unarchiveTopLevelObjectWithData()</code> method of <code>NSKeyedUnarchiver</code> to convert it back to an object graph – i.e., our array of <code>Person</code> objects.</p>`,9);function D(p,C){const t=a("VPCard"),l=a("VidStack"),r=a("FontIcon");return k(),u("div",null,[e("h1",m,[e("a",w,[e("span",null,h(p.$frontmatter.title)+" 관련",1)])]),s(t,o(c({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,y,s(t,o(c({title:"Fixing Project 10: NSCoding | Hacking with iOS",desc:"Fixing Project 10: NSCoding",link:"https://hackingwithswift.com/read/12/3/fixing-project-10-nscoding",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),s(l,{src:"youtube/5H3J16QeNnI"}),b,e("p",null,[n("With those changes, the "),v,n(" class now conforms to "),j,n(", so we can go back to "),s(r,{icon:"fa-brands fa-swift"}),S,n(" and add code to load and save the "),N,n(" array.")]),_])}const P=d(g,[["render",D],["__file","03-fixing-project-10-nscoding.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/read/12/03-fixing-project-10-nscoding.html","title":"Fixing Project 10: NSCoding","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Fixing Project 10: NSCoding","description":"Article(s) > Fixing Project 10: NSCoding","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Fixing Project 10: NSCoding"},{"property":"og:description","content":"Fixing Project 10: NSCoding"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/12/03-fixing-project-10-nscoding.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/12/03-fixing-project-10-nscoding.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Fixing Project 10: NSCoding"}],["meta",{"property":"og:description","content":"Article(s) > Fixing Project 10: NSCoding"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fixing Project 10: NSCoding\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.74,"words":1123},"filePathRelative":"hackingwithswift.com/read/12/03-fixing-project-10-nscoding.md","excerpt":"\\n"}');export{P as comp,I as data};
