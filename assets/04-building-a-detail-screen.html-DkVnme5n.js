import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as e,t as p,e as t,n as r,g as l,d as o,f as a,r as n,o as w}from"./app-BgNevrm5.js";const g={},m={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y=e("nav",{class:"table-of-contents"},[e("ul")],-1),b=e("hr",null,null,-1),k=e("p",null,"At this point in our app, we have a list of pictures to choose from, but although we can tap on them nothing happens. Our next goal is to design a new screen that will be shown when the user taps any row. We’re going to make it show their selected picture full screen, and it will slide in automatically when a picture is tapped.",-1),v=e("p",null,"This task can be split into two smaller tasks. First, we need to create some new code that will host this detail screen. Second, we need to draw the user interface for this screen inside Interface Builder.",-1),I=e("p",null,"Let’s start with the easy bit: create new code to host the detail screen. From the menu bar, go to the File menu and choose New > File, and a window full of options will appear. From that list, choose iOS > Cocoa Touch Class, then click Next.",-1),_=e("p",null,"You’ll be asked to name the new screen, and also tell iOS what it should build on. Please enter “DetailViewController” for the name, and “UIViewController” for “Subclass Of”. Make sure “Also create XIB file” is deselected, then click Next and Create to add the new file.",-1),V=e("p",null,"That’s the first job done – we have a new file that will contain code for the detail screen.",-1),S=e("code",null,"Main.storyboard",-1),C=a('<p>First, open the object library and find “View Controller” in there. Drag it out into the space to the right of your existing view controller. You could place it anywhere, really, but it’s nice to arrange your screens so they flow logically from left to right.</p><p>Now, if you look in the document outline you’ll see a second “View Controller scene” has appeared: one for the table view, and one for the detail view. If you’re not sure which is which, just click in the new screen – in the big white empty space that just got created – and it should select the correct scene in the document outline.</p><p>When we created our table view cell previously, we gave it an identifier so that we could load it in code. We need to do the same thing for this new screen. When you selected it a moment ago, it should have highlighted “View” in the document outline. Above that will be “View Controller” with a yellow icon next to it – please click on that to select the whole view controller now.</p><p>To give this view controller a name, go to the identity inspector by pressing <kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>3</kbd> or by using the menu. Now enter “Detail” where it says “Storyboard ID”. That’s it: we can now refer to this view controller as “Detail” in code. While you’re there, please click the arrow next to the Class box and select “DetailViewController” so that our user interface is connected to the new code we made earlier.</p><p>Now for the interesting part: we want this screen to display the user’s selected image nice and big, so we need to use a new user interface component called <code>UIImageView</code>. As you should be able to tell from the name, this is a part of UIKit (hence the “UI”), and is responsible for viewing images – perfect!</p><p>Look in the object library to find Image View; you might find it easiest to use the filter box again. Click and drag the image view from the object library onto the detail view controller, then let go. Now, drag its edges so that it fills the entire view controller.</p><figure><img src="https://hackingwithswift.com/img/books/hws/1-21@2x.png" alt="Drag the image view edge to edge inside the detail view controller, including underneath the simulated battery icon." tabindex="0" loading="lazy"><figcaption>Drag the image view edge to edge inside the detail view controller, including underneath the simulated battery icon.</figcaption></figure><p>This image view has no content right now, so it&#39;s filled with a pale blue background and the word <code>UIImageView</code>. We won&#39;t be assigning any content to it right now, though – that&#39;s something we&#39;ll do when the program runs. Instead, we need to tell the image view how to size itself for our screen, whether that&#39;s iPhone or iPad.</p><p>This might seem strange at first, after all you just placed it to fill the view controller, and it has the same size as the view controller, so that should be it, right? Well, not quite. Think about it: there are lots of iOS devices your app might run on, all with different sizes. So, how should the image view respond when it’s being shown on a 6 Plus or perhaps even an iPad?</p><p>iOS has an answer for this. And it&#39;s a brilliant answer that in many ways works like magic to do what you want. It&#39;s called Auto Layout: it lets you define rules for how your views should be laid out, and it automatically makes sure those rules are followed.</p><p>But – and this is a big but! – it has two rules of its own, both of which must be followed by you:</p><ul><li>Your layout rules must be complete. That is, you can&#39;t specify only an X position for something, you must also specify a Y position. If it&#39;s been a while since you were at school, &quot;X&quot; is position from the left of the screen, and &quot;Y&quot; is position from the top of the screen.</li><li>Your layout rules must not conflict. That is, you can&#39;t specify that a view must be 10 points away from the left edge, 10 points away from the right edge, and 1000 points wide. An iPhone 5 screen is only 320 points wide, so your layout is mathematically impossible. Auto Layout will try to recover from these problems by breaking rules until it finds a solution, but the end result is never what you want.</li></ul><p>You can create Auto Layout rules – known as <em>constraints</em> – entirely inside Interface Builder, and it will warn you if you aren&#39;t following the two rules. It will even help you correct any mistakes you make by suggesting fixes. Note: the fixes it suggests <em>might</em> be correct, but they might not be – tread carefully!</p><p>We&#39;re going to create four constraints now: one each for the top, bottom, left and right of the image view so that it expands to fill the detail view controller regardless of its size. There are lots of ways of adding Auto Layout constraints, but the easiest way right now is to select the image view then go to the Editor menu and choose &gt; Resolve Auto Layout Issues &gt; Reset To Suggested Constraints.</p><p>You’ll see that option listed twice in the menu because there are two subtly different options, but in this instance it doesn’t matter which one you choose. If you prefer keyboard shortcuts, press <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>=</kbd> to accomplish the same thing.</p><p>Visually, your layout will look pretty much identical once you&#39;ve added the constraints, but there are two subtle differences. First, there&#39;s a thin blue line surrounding the <code>UIImageView</code> on the detail view controller, which is Interface Builder&#39;s way of showing you that the image view has a correct Auto Layout definition.</p><p>Second, in the document outline pane you&#39;ll see a new entry for &quot;Constraints&quot; beneath the image view. All four constraints that were added are hidden under that Constraints item, and you can expand it to view them individually if you’re curious.</p><p>With the constraints added, there&#39;s one more thing to do here before we&#39;re finished with Interface Builder, and that&#39;s to connect our new image view to some code. You see, having the image view inside the layout isn&#39;t enough – if we actually want to <em>use</em> the image view inside code, we need to create a property for it that&#39;s attached to the layout.</p><p>This property is like the <code>pictures</code> array we made previously, but it has a little bit more “interesting” Swift syntax we need to cover. Even more cunningly, it’s created using a really bizarre piece of user interface design that will send your brain for a loop if you’ve used other graphical IDEs.</p><p>Let’s dive in, and I’ll explain on the way. Xcode has a special display layout called the Assistant Editor, which splits your Xcode editor in two: the view you had before on top, and a related view at the bottom. In this case, it&#39;s going to show us Interface Builder on top, and the code for the detail view controller below.</p><p>Xcode decides what code to show based on what item is selected in Interface Builder, so make sure the image view is still selected and choose View &gt; Assistant Editor &gt; Show Assistant Editor from the menu. You can also use the keyboard shortcut <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>Return</kbd> if you prefer.</p><p>Xcode can display the assistant editor as two vertical panes rather than two horizontal panes. I find the horizontal panes easiest – i.e., one above the other. You can switch between them by going to View &gt; Assistant Editor and choosing either Assistant Editors On Right or Assistant Editors on Bottom.</p>',22),x=e("code",null,"DetailViewController.swift",-1),B=e("code",null,"DetailViewController.swift",-1),A=a('<p>Now for the bizarre piece of UI. What I want you to do is this:</p><p>1.Make sure the image view is selected. 2.Hold down the Ctrl key on your keyboard. 3.Press your mouse button down on the image view, but hold it down – don’t release it. 4.While continuing to hold down Ctrl and your mouse button, drag from the image view into your code – into the other assistant editor pane. 5.As you move your mouse cursor, you should see a blue line stretch out from the image view into your code. Stretch that line so that it points between <code>class DetailViewController: UIViewController {</code> and <code>override func viewDidLoad() {</code>. 6.When you’re between those two, a horizontal blue line should appear, along with a tooltip saying Insert Outlet Or Outlet Connection. When you see that, let go of both Ctrl and your mouse button. (It doesn’t matter which one you release first.)</p><p>If you follow those steps, a balloon should appear with five fields: Connection, Object, Name, Type, and Storage.</p><figure><img src="https://hackingwithswift.com/img/books/hws/1-22@2x.png" alt="When you &lt;kbd&gt;Ctrl&lt;/kbd&gt;-drag from Interface Builder into your code, a bubble will appear offering to create an outlet for you." tabindex="0" loading="lazy"><figcaption>When you <kbd>Ctrl</kbd>-drag from Interface Builder into your code, a bubble will appear offering to create an outlet for you.</figcaption></figure><p>By default the options should be “Outlet” for connection, “Detail View Controller” for Object, nothing for name, “UIImageView” for type, and “Strong” for storage. If you see “Weak” for storage please change it to “Strong” – Xcode will remember that setting from now on.</p>',5),T=e("code",null,"DetailViewController.swift",-1),D=a(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">DetailViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@IBOutlet</span> <span class="token keyword">var</span> imageView<span class="token punctuation">:</span> <span class="token class-name">UIImageView</span><span class="token operator">!</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To the left of the new line of code, in the gutter next to the line number, is a gray circle with a line around it. If you move your mouse cursor over that you’ll see the image view flash – that little circle is Xcode’s way of telling you the line of code is connected to the image view in your storyboard.</p><p>So, we <kbd>Ctrl</kbd>-dragged from Interface Builder straight into our Swift file, and Xcode wrote a line of code for us as a result. Some bits of that code are new, so let&#39;s break down the whole line:</p><ul><li><code>@IBOutlet</code>: This attribute is used to tell Xcode that there&#39;s a connection between this line of code and Interface Builder.</li><li><code>var</code>: This declares a new variable or variable property.</li><li><code>imageView</code>: This was the property name assigned to the <code>UIImageView</code>. Note the way capital letters are used: variables and constants should start with a lowercase letter, then use a capital letter at the start of any subsequent words. For example, <code>myAwesomeVariable</code>. This is sometimes called camel case.</li><li><code>UIImageView!</code>: This declares the property to be of type <code>UIImageView</code>, and again we see the implicitly unwrapped optional symbol: <code>!</code>. This means that that <code>UIImageView</code> may be there or it may not be there, but we&#39;re certain it definitely will be there by the time we want to use it.</li></ul><p>If you were struggling to understand implicitly unwrapped optionals (don&#39;t worry; they are complicated!), this code might make it a bit clearer. You see, when the detail view controller is being created, its view hasn&#39;t been loaded yet – it&#39;s just some code running on the CPU.</p><p>When the basic stuff has been done (allocating enough memory to hold it all, for example), iOS goes ahead and loads the layout from the storyboard, then connects all the outlets from the storyboard to the code.</p><p>So, when the detail controller is first made, the <code>UIImageView</code> doesn&#39;t exist because it hasn&#39;t been created yet – but we still need to have some space for it in memory. At this point, the property is <code>nil</code>, or just some empty memory. But when the view gets loaded and the outlet gets connected, the <code>UIImageView</code> will point to a real <code>UIImageView</code>, not to <code>nil</code>, so we can start using it.</p><p>In short: it starts life as <code>nil</code>, then gets set to a value before we use it, so we&#39;re certain it won&#39;t ever be <code>nil</code> by the time we want to use it – a textbook case of implicitly unwrapped optionals. If you still don&#39;t understand implicitly unwrapped optionals, that&#39;s perfectly fine – keep on going and they&#39;ll become clear over time.</p><p>That’s our detail screen complete – we’re done with Interface Builder for now, and can return to code. This also means we’re done with the assistant editor, so you can return to the full-screen editor by going to View &gt; Standard Editor &gt; Show Standard Editor.</p>`,9);function O(c,U){const s=n("VPCard"),d=n("VidStack"),i=n("FontIcon");return w(),u("div",null,[e("h1",m,[e("a",f,[e("span",null,p(c.$frontmatter.title)+" 관련",1)])]),t(s,r(l({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),y,b,t(s,r(l({title:"Building a detail screen | Hacking with iOS",desc:"Building a detail screen",link:"https://hackingwithswift.com/read/1/4/building-a-detail-screen",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),t(d,{src:"youtube/paMpdmJcpRg"}),k,v,I,_,V,e("p",null,[o("The second task takes a little more thinking. Go back to "),t(i,{icon:"iconfont icon-xcode"}),S,o(", and you’ll see our existing two view controllers there: that’s the navigation view controller on the left, and the table view controller on the right. We’re going to add a new view controller – a new screen – now, which will be our detail screen.")]),C,e("p",null,[o("Regardless of which you prefer, you should now see the detail view controller in Interface Builder in one pane, and in the other pane the source code for "),t(i,{icon:"fa-brands fa-swift"}),x,o(". Xcode knows to load "),t(i,{icon:"fa-brands fa-swift"}),B,o(" because you changed the class for this screen to be “DetailViewController” just after you changed its storyboard ID.")]),A,e("p",null,[o("Leave all of them alone except for Name – I’d like you to enter “imageView” in there. When you’ve done that click the Connect button, and Xcode will insert a line of code into "),t(i,{icon:"fa-brands fa-swift"}),T,o(". You should see this:")]),D])}const P=h(g,[["render",O],["__file","04-building-a-detail-screen.html.vue"]]),j=JSON.parse('{"path":"/hackingwithswift.com/read/01/04-building-a-detail-screen.html","title":"Building a detail screen","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Building a detail screen","description":"Article(s) > Building a detail screen","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Building a detail screen"},{"property":"og:description","content":"Building a detail screen"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/01/04-building-a-detail-screen.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/01/04-building-a-detail-screen.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Building a detail screen"}],["meta",{"property":"og:description","content":"Article(s) > Building a detail screen"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/1-21@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Building a detail screen\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/1-21@2x.png\\",\\"https://hackingwithswift.com/img/books/hws/1-22@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":8.64,"words":2593},"filePathRelative":"hackingwithswift.com/read/01/04-building-a-detail-screen.md","excerpt":"\\n"}');export{P as comp,j as data};
