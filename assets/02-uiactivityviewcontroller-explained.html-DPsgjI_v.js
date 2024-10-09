import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as e,t as m,e as t,n as i,g as s,w,d as a,f as r,r as n,o as g}from"./app-BgNevrm5.js";const y={},f={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},v={class:"table-of-contents"},k=e("hr",null,null,-1),x=r("<p>Sharing things using iOS uses a standard, powerful component that other apps can plug into. As a result, it should be your first port of call when adding sharing to an app. This component is called <code>UIActivityViewController</code>: you tell it what kind of data you want to share, and it figures out how best to share it.</p><p>As we&#39;re working with images, <code>UIActivityViewController</code> will automatically give us functionality to share by iMessage, by email and by Twitter and Facebook, as well as saving the image to the photo library, assigning it to contact, printing it out via AirPrint, and more. It even hooks into AirDrop and the iOS extensions system so that other apps can read the image straight from us.</p><p>Best of all, it takes just a handful of lines of code to make it all work. But before we touch <code>UIActivityViewController</code>, we first need to give users a way to trigger sharing, and the way we’re going to use it is to add a bar button item.</p><p>Project 1, if you recall, used a <code>UINavigationController</code> to let users move between two screens. By default, a <code>UINavigationController</code> has a bar across the top, called a <code>UINavigationBar</code>, and as developers we can add buttons to this navigation bar that call our methods.</p>",4),I=e("code",null,"DetailViewController.swift",-1),_=e("code",null,"viewDidLoad()",-1),A=e("code",null,"title =",-1),S=r(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">navigationItem<span class="token punctuation">.</span>rightBarButtonItem <span class="token operator">=</span> <span class="token class-name">UIBarButtonItem</span><span class="token punctuation">(</span>barButtonSystemItem<span class="token punctuation">:</span> <span class="token punctuation">.</span>action<span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token keyword">self</span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>shareTapped<span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You’ll get an error for a moment, but that’s OK; please read on.</p><p>This is easily split into two parts: on the left we&#39;re assigning to the <code>rightBarButtonItem</code> of our view controller&#39;s <code>navigationItem</code>. This navigation item is used by the navigation bar so that it can show relevant information. In this case, we&#39;re setting the right bar button item, which is a button that appears on the right of the navigation bar when this view controller is visible.</p><p>On the right we create a new instance of the <code>UIBarButtonItem</code> data type, setting it up with three parameters: a system item, a target, and an action. The system item we specify is <code>.action</code>, but you can type <code>.</code> to have code completion tell you the many other options available. The <code>.action</code> system item displays an arrow coming out of a box, signaling the user can do something when it&#39;s tapped.</p><p>The <code>target</code> and <code>action</code> parameters go hand in hand, because combined they tell the <code>UIBarButtonItem</code> what method should be called. The <code>action</code> parameter is saying &quot;when you&#39;re tapped, call the <code>shareTapped()</code> method,&quot; and the target parameter tells the button that the method belongs to the current view controller – <code>self</code>.</p><p>The part in <code>#selector</code> bears explaining a bit more, because it&#39;s new and unusual syntax. What it does is tell the Swift compiler that a method called &quot;shareTapped&quot; will exist, and should be triggered when the button is tapped. Swift will check this for you: if we had written &quot;shareTaped&quot; by accident – missing the second P – Xcode will refuse to build our app until we fix the typo.</p><p>If you don&#39;t like the look of the various system bar button items available, you can create one with your own title or image instead. However, it&#39;s generally preferred to use the system items where possible because users already know what they do.</p><p>With the bar button created, it&#39;s time to create the <code>shareTapped()</code> method. Are you ready for this huge, complicated amount of code? Here goes! Put this just after the <code>viewWillDisappear()</code> method:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">shareTapped</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token keyword">guard</span> <span class="token keyword">let</span> image <span class="token operator">=</span> imageView<span class="token punctuation">.</span>image<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">jpegData</span><span class="token punctuation">(</span>compressionQuality<span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;No image found&quot;</span></span><span class="token punctuation">)</span> </span>
<span class="line">        <span class="token keyword">return</span> </span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">UIActivityViewController</span><span class="token punctuation">(</span>activityItems<span class="token punctuation">:</span> <span class="token punctuation">[</span>image<span class="token punctuation">]</span><span class="token punctuation">,</span> applicationActivities<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    vc<span class="token punctuation">.</span>popoverPresentationController<span class="token operator">?</span><span class="token punctuation">.</span>barButtonItem <span class="token operator">=</span> navigationItem<span class="token punctuation">.</span>rightBarButtonItem</span>
<span class="line">    <span class="token function">present</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s it. With those handful of lines of code, <code>shareTapped()</code> can send photos via AirDrop, post to Twitter, and much more. You have to admit, iOS can be pretty amazing sometimes!</p><p>A lot of that code is old; we already learned about <code>present()</code> in project 2. However, some other parts are new, so let me explain what they do:</p><ul><li>We start with the method name, marked with <code>@objc</code> because this method will get called by the underlying Objective-C operating system (the <code>UIBarButtonItem</code>) so we need to mark it as being available to Objective-C code. When you call a method using <code>#selector</code> you’ll always need to use <code>@objc</code> too.</li><li>Our image view may or may not have an image inside, so we’ll read it out safely and convert it to JPEG data. This has a <code>compressionQuality</code> parameter where you can specify a value between 1.0 (maximum quality) and 0.0 (minimum quality_.</li><li>Next we create a <code>UIActivityViewController</code>, which is the iOS method of sharing content with other apps and services.</li><li>Finally, we tell iOS where the activity view controller should be anchored – where it should appear from.</li></ul><p>On iPhone, activity view controllers automatically take up the full screen, but on iPad they appear as a popover that allows the user to see what they were working on below. This line of code tells iOS to anchor the activity view controller to the right bar button item (our share button), but this only has an effect on iPad – on iPhone it&#39;s ignored.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>In case you were wondering, when you use <code>@IBAction</code> to make storyboards call your code, that automatically implies <code>@objc</code> – Swift knows that no <code>@IBAction</code> makes sense unless it can be called by Objective-C code.</p></div><p>Let&#39;s focus on how activity view controllers are created. As you can see in the code, you pass in two items: an array of items you want to share, and an array of any of your own app&#39;s services you want to make sure are in the list. We&#39;re passing an empty array into the second parameter, because our app doesn&#39;t have any services to offer. But if you were to extend this app to have something like &quot;Other pictures like this&quot;, for example, then you would include that functionality here.</p><p>So, the real focus is on the first parameter: we&#39;re passing in <code>[image]</code>. This is the JPEG data that describes the user’s selected image, and iOS understands that it’s an image so it can post it to Twitter, Facebook, and other places.</p><p>And… that&#39;s it. No, really. We&#39;re pretty much done: your app now supports sharing.</p><p>Don’t worry if you’re not sure about <code>@objc</code> just yet – we’ll be coming back to it again and again. The main thing to remember is that when Swift code calls a Swift method that method doesn’t need to be marked <code>@objc</code>. On the other hand, when Objective-C code needs to call a Swift method – and that’s any time it gets called by one of Apple’s UI components, for example – then the <code>@objc</code> <em>is</em> required.</p><figure><img src="https://hackingwithswift.com/img/books/hws/3-1@2x.png" alt=" lets your users share, print, save and more – all in just two lines of code!" tabindex="0" loading="lazy"><figcaption><code>UIActivityViewController</code> lets your users share, print, save and more – all in just two lines of code!</figcaption></figure><hr><h2 id="fixing-a-small-bug" tabindex="-1"><a class="header-anchor" href="#fixing-a-small-bug"><span>Fixing a small bug</span></a></h2><p>There’s one small but important bug with the current code: if you select Save Image inside the activity view controller, you’ll see the app crashes immediately. What’s happening here is that our app tries to access the user’s photo library so it can write the image there, but that isn’t allowed on iOS unless the user grants permission first.</p><p>To fix this we need to edit the Info.plist file for our project. We haven’t touched this yet, but it’s designed to hold configuration settings for your app that won’t ever change over time.</p><p>Select Info.plist in the project navigator, then when you see a big table full of data please right-click in the white space below that. Click “Add Row” from the menu that appears, and you should see a new list of options appear that starts with “Application Category”.</p><p>What I’d like you to do is scroll down in that list and find the name “Privacy - Photo Library Additions Usage Description”. This is what will be shown to the user when your app needs to add to their photo library.</p><p>When you select “Privacy - Photo Library Additions Usage Description” you’ll see “String” appear to the right of it, and to the right of “String” will be an empty white space. That white space is where you can type some text to show to the user that explains what your app intends to do with their photo library.</p><p>In this app we only need to save images, so put this text in the box: “We need to save photos you like.”</p><p>Now try running the app again, and this time selecting “Save Image” will show a message asking whether the user is OK with the app writing to their photos – much better!</p>`,28);function C(c,T){const o=n("VPCard"),l=n("router-link"),p=n("VidStack"),h=n("FontIcon");return g(),u("div",null,[e("h1",f,[e("a",b,[e("span",null,m(c.$frontmatter.title)+" 관련",1)])]),t(o,i(s({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),e("nav",v,[e("ul",null,[e("li",null,[t(l,{to:"#fixing-a-small-bug"},{default:w(()=>[a("Fixing a small bug")]),_:1})])])]),k,t(o,i(s({title:"UIActivityViewController explained | Hacking with iOS",desc:"UIActivityViewController explained",link:"https://hackingwithswift.com/read/3/2/uiactivityviewcontroller-explained",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),t(p,{src:"youtube/_bjMK-c1EV8"}),x,e("p",null,[a("Let's create one of those buttons now. First, take a copy of your existing Project1 folder (the whole thing), and rename it to be Project3. Now launch it in Xcode, open the file "),t(h,{icon:"fa-brands fa-swift"}),I,a(", and find the "),_,a(" method. Directly beneath the "),A,a(" line,")]),S])}const U=d(y,[["render",C],["__file","02-uiactivityviewcontroller-explained.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/read/03/02-uiactivityviewcontroller-explained.html","title":"UIActivityViewController explained","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"UIActivityViewController explained","description":"Article(s) > UIActivityViewController explained","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > UIActivityViewController explained"},{"property":"og:description","content":"UIActivityViewController explained"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/03/02-uiactivityviewcontroller-explained.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/03/02-uiactivityviewcontroller-explained.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"UIActivityViewController explained"}],["meta",{"property":"og:description","content":"Article(s) > UIActivityViewController explained"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/3-1@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UIActivityViewController explained\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/3-1@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[{"level":2,"title":"Fixing a small bug","slug":"fixing-a-small-bug","link":"#fixing-a-small-bug","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":5.47,"words":1641},"filePathRelative":"hackingwithswift.com/read/03/02-uiactivityviewcontroller-explained.md","excerpt":"\\n"}');export{U as comp,V as data};
