import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as e,t as h,e as s,n as o,g as c,d as n,f as p,r as t,o as k}from"./app-BgNevrm5.js";const g={},m={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},w=e("nav",{class:"table-of-contents"},[e("ul")],-1),v=e("hr",null,null,-1),y=p(`<p>When the app first runs, users should see a totally innocuous screen, with nothing secret visible. But we also don&#39;t want secret information to be visible when the user leaves the app for a moment then comes back, or if they double-tap the home button to multitask – doing so might mean that the app is left unlocked, which is the last thing we want.</p><p>To make this work, let&#39;s start by giving the view controller a totally innocuous title that absolutely won&#39;t make anyone wonder what&#39;s going on. Put this into <code>viewDidLoad()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Nothing to see here&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Next we&#39;re going to create two new methods: <code>unlockSecretMessage()</code> to load the message into the text view, and <code>saveSecretMessage()</code>. But before we do that, I want to introduce you to a helpful class called <code>KeychainWrapper</code>, which we&#39;ll be using to read and write keychain values.</p><p>This class was not made by Apple; instead, it&#39;s open source software released under the MIT license, which means we can use it in our own projects as long as the copyright message remains intact. This class is needed because working with the keychain is <em>complicated</em> – far harder than anything we have done so far. So instead of using it directly, we&#39;ll be using this wrapper class that makes the keychain work like <code>UserDefaults</code>.</p>`,5),b={href:"https://github.com/twostraws/HackingWithSwift",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"twostraws/HackingWithSwift",-1),_=e("code",null,"KeychainWrapper.swift",-1),x=e("code",null,"KeychainItemAccessibility.swift",-1),W=p(`<p>The first of our two new methods, <code>unlockSecretMessage()</code>, needs to show the text view, then load the keychain&#39;s text into it. Loading strings from the keychain using <code>KeychainWrapper</code> is as simple as using its <code>string(forKey:)</code> method, but the result is optional so you should unwrap it once you know there&#39;s a value there.</p><p>Here it is:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">unlockSecretMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    secret<span class="token punctuation">.</span>isHidden <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Secret stuff!&quot;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token class-name">KeychainWrapper</span><span class="token punctuation">.</span>standard<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;SecretMessage&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        secret<span class="token punctuation">.</span>text <span class="token operator">=</span> text</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you prefer, you can use nil coalescing to provide the default value of an empty string, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">unlockSecretMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    secret<span class="token punctuation">.</span>isHidden <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Secret stuff!&quot;</span></span></span>
<span class="line"></span>
<span class="line">    secret<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token class-name">KeychainWrapper</span><span class="token punctuation">.</span>standard<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;SecretMessage&quot;</span></span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use whichever you prefer!</p><p>The second of our two new methods, <code>saveSecretMessage()</code>, needs to write the text view&#39;s text to the keychain, then make it hidden. This is done using the <code>set()</code> method of <code>KeychainWrapper</code>, so it&#39;s just as easy as reading. Note that we should only execute this code if the text view is visible, otherwise if a save happens before the app is unlocked then it will overwrite the saved text!</p><p>Here&#39;s the code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">saveSecretMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">guard</span> secret<span class="token punctuation">.</span>isHidden <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">KeychainWrapper</span><span class="token punctuation">.</span>standard<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span>secret<span class="token punctuation">.</span>text<span class="token punctuation">,</span> forKey<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;SecretMessage&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    secret<span class="token punctuation">.</span><span class="token function">resignFirstResponder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    secret<span class="token punctuation">.</span>isHidden <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">    title <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Nothing to see here&quot;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>I slipped a new method in there: <code>resignFirstResponder()</code>. This is used to tell a view that has input focus that it should give up that focus. Or, in Plain English, to tell our text view that we&#39;re finished editing it, so the keyboard can be hidden. This is important because having a keyboard present might arouse suspicion – as if our rather obvious navigation bar title hadn&#39;t done enough already…</p><p>Now, there are still two questions remaining: how should users trigger a save when they are ready, and how do we ensure that as soon as the user starts to leave the app we make their data safe? For the first problem, consider this: how often do you see a save button in iOS? Hardly ever, I expect!</p><p>It turns out that one answer solves both problems: if we automatically save when the user leaves the app then the user need never worry about saving because it&#39;s done for them, and our save method above automatically hides the text when it&#39;s called so the app becomes safe as soon as any action is taken to leave it.</p><p>We&#39;re already using <code>NotificationCenter</code> to watch for the keyboard appearing and disappearing, and we can watch for another notification that will tell us when the application will stop being active – i.e., when our app has been backgrounded or the user has switched to multitasking mode. This notification is called <code>UIApplication.willResignActiveNotification</code>, and you should make us an observer for it in <code>viewDidLoad()</code> like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">notificationCenter<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> selector<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>saveSecretMessage<span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">.</span>willResignActiveNotification<span class="token punctuation">,</span> object<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That calls our <code>saveSecretMessage()</code> directly when the notification comes in, which means the app automatically saves any text and hides it when the app is moving to a background state.</p><p>The last thing to do before the app is actually useful is to make tapping the button call <code>unlockSecretMessage()</code>, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@IBAction</span> <span class="token keyword">func</span> <span class="token function-definition function">authenticateTapped</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> sender<span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">unlockSecretMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It&#39;s not actually secure at this point (other than saving its data in the iOS keychain!), but by saving and loading its text it is at least useful.</p>`,18);function O(l,q){const i=t("VPCard"),r=t("VidStack"),a=t("FontIcon");return k(),d("div",null,[e("h1",m,[e("a",f,[e("span",null,h(l.$frontmatter.title)+" 관련",1)])]),s(i,o(c({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,v,s(i,o(c({title:"Writing somewhere safe: the iOS keychain | Hacking with iOS",desc:"Writing somewhere safe: the iOS keychain",link:"https://hackingwithswift.com/read/28/3/writing-somewhere-safe-the-ios-keychain",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),s(r,{src:"youtube/h9RVeeUVhf8"}),y,e("p",null,[n("If you haven't already downloaded this project's files from "),e("a",b,[n("GitHub ("),s(a,{icon:"iconfont icon-github"}),S,n(")")]),n(", please do so now. In there you'll find the files "),s(a,{icon:"fa-brands fa-swift"}),_,n(" and "),s(a,{icon:"fa-brands fa-swift"}),x,n("; please copy them into your Xcode project to make the class available.")]),W])}const K=u(g,[["render",O],["__file","03-writing-somewhere-safe-the-ios-keychain.html.vue"]]),T=JSON.parse('{"path":"/hackingwithswift.com/read/28/03-writing-somewhere-safe-the-ios-keychain.html","title":"Writing somewhere safe: the iOS keychain","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Writing somewhere safe: the iOS keychain","description":"Article(s) > Writing somewhere safe: the iOS keychain","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Writing somewhere safe: the iOS keychain"},{"property":"og:description","content":"Writing somewhere safe: the iOS keychain"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/28/03-writing-somewhere-safe-the-ios-keychain.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/28/03-writing-somewhere-safe-the-ios-keychain.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Writing somewhere safe: the iOS keychain"}],["meta",{"property":"og:description","content":"Article(s) > Writing somewhere safe: the iOS keychain"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Writing somewhere safe: the iOS keychain\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.34,"words":1003},"filePathRelative":"hackingwithswift.com/read/28/03-writing-somewhere-safe-the-ios-keychain.md","excerpt":"\\n"}');export{K as comp,T as data};
