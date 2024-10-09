import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as t,t as u,e as n,n as o,g as i,d as s,f as d,r as l,o as h}from"./app-BgNevrm5.js";const k={},m={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},g=t("nav",{class:"table-of-contents"},[t("ul")],-1),f=t("hr",null,null,-1),y=t("p",null,"There's one more trick XCTest has up its sleeve, and if you're not already impressed then I think this will finally win you over.",-1),b=t("p",null,"We've written tests for our data model: are the words loaded correctly? Are the word counts correct? Did the words get counted in an appropriate time? Does our user filtering work? These are all useful tests, and help make sure our code works now and in the future when further changes are made.",-1),v=t("p",null,"But none of those tests tell us whether our user interface is working as expected, so it's possible that the app could still be broken even though our model is in perfect condition.",-1),q=t("p",null,"XCTest has a solution, and it's a beautiful one: integrated user interface tests that manipulate your app as if there were a real user in control. XCTest is smart enough to understand how the system works, so it will automatically wait for things like animations to complete before trying to check your assertions.",-1),X=t("code",null,"Project39Tests.swift",-1),T=t("code",null,"Project39UITests.swift",-1),_=t("code",null,"Project39UITests.swift",-1),x=d(`<p>You&#39;ll see Xcode has written <code>setup()</code> and <code>tearDown()</code> methods again, although this time the <code>setup()</code> method actually has some code in to get things started. You&#39;ll also see a <code>testExample()</code> method, but please just delete that – we&#39;ll be writing our own.</p><p>We&#39;re going to start with a very simple test: when the view controller loads, does it show the correct number of words? If you remember, our app applies an immediate filter for the word &quot;swift&quot;, which appears 7 times in Shakespeare&#39;s comedies. So, to test that our initial app state is correct, we need to write this test:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">testInitialStateIsCorrect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> table <span class="token operator">=</span> <span class="token class-name">XCUIApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>tables</span>
<span class="line">    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>table<span class="token punctuation">.</span>cells<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;There should be 7 rows initially&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please go ahead and run that test now to make sure it works correctly.</p><p>OK, so how does that code work? There are only two lines, but it masks a whole lot of complexity:</p><ul><li>Calling <code>XCUIApplication()</code> gets you access to the test harness for your running application. This lets you query its user interface and perform actions as if you were a user.</li><li>Calling <code>.tables</code> will return an <code>XCUIElementQuery</code>, which in our situation would point to our table.</li><li>If there were more than one table visible, this would point to an array of tables, and we&#39;d need to query them further to narrow it down to one table before acting on it. Trying to manipulate a query that points to more than one thing will crash your test.</li><li>This is the really mind-bending bit: the results of queries aren&#39;t fixed. So in our code the <code>let table</code> will point to a single table, but if the app adds two more tables for whatever reason, that <code>table</code> constant will now point to three tables – trying to manipulate it will crash your test.</li><li>Xcode uses the iOS accessibility system to navigate around these user interface tests. This is good because it means any application that is accessibility aware is ready for UI testing, but also because it encourages developers to add accessibility to their apps – which makes the world a better place for everyone. However, it&#39;s <em>bad</em> because the accessibility system has to read things from the screen rather than making API calls.</li><li>In our app, we start by applying a filter for the word &quot;swift&quot;, which was for a reason: without this filter there are 18,000+ rows in our table, and the accessibility system seems to try to scan them all to perform our test. This is so slow that it simply wouldn&#39;t work, which is why the initial filter is applied.</li></ul><p>So: user interface testing might look simple, but it&#39;s actually surprisingly hard. Fortunately, Xcode has a smart, simple and <em>almost</em> magical solution: test recording. Let&#39;s try it now – please create this empty method in your user interface tests:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">testUserFilteringByString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Click inside that method, so that if you were to type you would be typing inside the method. Now click the red circle button just below your editing window: this will build and launch your app, but place it in record mode. It&#39;s a small button, but you can see it in the screenshot below.</p><figure><img src="https://hackingwithswift.com/img/books/hws/39-13@2x.png" alt="Create an empty method, click inside it, then click the small red circle that you can see in this screenshot." tabindex="0" loading="lazy"><figcaption>Create an empty method, click inside it, then click the small red circle that you can see in this screenshot.</figcaption></figure><p>When your app is recording a UI test, any taps, swipes, or other actions you perform in the app will automatically be converted to code inside your test – Xcode will literally write your test for you. However, there are three catches: first, it will usually write some fairly unpleasant code, and certainly rarely writes what a trained developer would do; second, it still doesn&#39;t know what a pass or fail looks like, so you need to add your own assertions at the end; third, sometimes it won&#39;t even write valid code, although recent Xcode versions have reduced the chance of that happening.</p><p>So, it&#39;s a long way from perfect, but it does at least give you something to start with that you can easily rewrite. Your app is already in record mode, because you clicked the red circle to start it off. I want you to switch to the simulator, click the search button, then use the on-screen keyboard to type &quot;test&quot;. Finally, click the Filter button to dismiss the alert view, then go back to Xcode and click the red circle button again to end recording.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Xcode sometimes fails to work with the iOS Simulator&#39;s hardware keyboard option – you may need to use the on-screen keyboard.</p></div><figure><img src="https://hackingwithswift.com/img/books/hws/39-14@2x.png" alt="Try to position your Xcode window so you can see Xcode write its code while you work in the simulator." tabindex="0" loading="lazy"><figcaption>Try to position your Xcode window so you can see Xcode write its code while you work in the simulator.</figcaption></figure><p>If everything worked correctly, Xcode will have written some code for you. Here&#39;s what I got:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">testUserFilteringByString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token class-name">XCUIApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    app<span class="token punctuation">.</span>navigationBars<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Project39.View&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span>buttons<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Search&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> filterAlert <span class="token operator">=</span> app<span class="token punctuation">.</span>alerts<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Filter…&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line">    filterAlert<span class="token punctuation">.</span>collectionViews<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>matching<span class="token punctuation">:</span> <span class="token punctuation">.</span>other<span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>matching<span class="token punctuation">:</span> <span class="token punctuation">.</span>other<span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>matching<span class="token punctuation">:</span> <span class="token punctuation">.</span>other<span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>matching<span class="token punctuation">:</span> <span class="token punctuation">.</span>other<span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>matching<span class="token punctuation">:</span> <span class="token punctuation">.</span>other<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">element</span><span class="token punctuation">(</span>boundBy<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>matching<span class="token punctuation">:</span> <span class="token punctuation">.</span>textField<span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;test&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    filterAlert<span class="token punctuation">.</span>buttons<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Filter&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Even though this is a very simple test, Xcode’s record feature managed to write some complex code. It doesn’t <em>need</em> to be complex, but at least Xcode&#39;s attempt does give us something to build on:</p><ul><li>The line <code>app.navigationBars[&quot;Project39.View&quot;].buttons[&quot;Search&quot;].tap()</code> can be simplified to <code>app.buttons[&quot;Search&quot;].tap()</code> because there&#39;s only one search button in view.</li><li>The line <code>let filterAlert = app.alerts[&quot;Filter…&quot;]</code> can be simplified to <code>let filterAlert = app.alerts</code>, again because there&#39;s only one of them.</li><li>The massive long line that starts with <code>filterAlert.collectionViews.children</code> can be collapsed down into <code>let textField = filterAlert.textFields.element</code>, which is significantly shorter.</li><li>To finish things off, we need to tell Xcode what a passing test looks like, so we&#39;ll add <code>XCTAssertEqual(app.tables.cells.count, 56, &quot;There should be 56 words matching &#39;test&#39;&quot;)</code> to match the &quot;test&quot; string that was entered.</li></ul><p>With all that in mind, here&#39;s a vastly improved version of the test:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">testUserFilteringString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token class-name">XCUIApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    app<span class="token punctuation">.</span>buttons<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Search&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> filterAlert <span class="token operator">=</span> app<span class="token punctuation">.</span>alerts</span>
<span class="line">    <span class="token keyword">let</span> textField <span class="token operator">=</span> filterAlert<span class="token punctuation">.</span>textFields<span class="token punctuation">.</span>element</span>
<span class="line">    textField<span class="token punctuation">.</span><span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;test&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    filterAlert<span class="token punctuation">.</span>buttons<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Filter&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">XCTAssertEqual</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>tables<span class="token punctuation">.</span>cells<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;There should be 56 words matching &#39;test&#39;&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you might wonder why it&#39;s worth using Xcode&#39;s UI recording system only to rewrite literally everything it produced. And I&#39;ll be honest: once you understand how Xcode UI testing works you&#39;ll probably write all your tests by hand, and you&#39;ll even add things like comments and shared code to make them a valuable part of your project.</p><p>However, Xcode&#39;s UI recordings <em>are</em> useful when you&#39;re learning because it becomes significantly easier to get started when Xcode gives you something basic to work with.</p><p>Go ahead and run the test now, and you should see Xcode behaving like a real user. All being well, the assertion will prove true, and you&#39;ll get a green checkmark for your hard work – well done!</p>`,23);function C(c,I){const a=l("VPCard"),e=l("FontIcon");return h(),r("div",null,[t("h1",m,[t("a",w,[t("span",null,u(c.$frontmatter.title)+" 관련",1)])]),n(a,o(i({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,n(a,o(i({title:"User interface testing with XCTest | Hacking with iOS",desc:"User interface testing with XCTest",link:"https://hackingwithswift.com/read/39/8/user-interface-testing-with-xctest",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),y,b,v,q,t("p",null,[s("When we created our project we added both unit tests ("),n(e,{icon:"fa-brands fa-swift"}),X,s(") and also UI tests ("),n(e,{icon:"fa-brands fa-swift"}),T,s("), and we'll be working with the latter now so please open "),n(e,{icon:"fa-brands fa-swift"}),_,s(" for editing.")]),x])}const U=p(k,[["render",C],["__file","08-user-interface-testing-with-xctest.html.vue"]]),F=JSON.parse('{"path":"/hackingwithswift.com/read/39/08-user-interface-testing-with-xctest.html","title":"User interface testing with XCTest","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"User interface testing with XCTest","description":"Article(s) > User interface testing with XCTest","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > User interface testing with XCTest"},{"property":"og:description","content":"User interface testing with XCTest"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/39/08-user-interface-testing-with-xctest.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/39/08-user-interface-testing-with-xctest.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"User interface testing with XCTest"}],["meta",{"property":"og:description","content":"Article(s) > User interface testing with XCTest"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/39-13@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"User interface testing with XCTest\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/39-13@2x.png\\",\\"https://hackingwithswift.com/img/books/hws/39-14@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":5.1,"words":1530},"filePathRelative":"hackingwithswift.com/read/39/08-user-interface-testing-with-xctest.md","excerpt":"\\n"}');export{U as comp,F as data};
