import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as w,b as e,t as m,e as o,n as c,g as d,w as l,d as t,f as s,r as a,o as f}from"./app-BgNevrm5.js";const g={},b={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},v=e("hr",null,null,-1),I=s("<p>Our app loads all the storm images correctly, but it doesn’t do anything interesting with them – printing to the Xcode console is helpful for debugging, but I can promise you it doesn’t make for a best-selling app!</p><p>To fix this, our next goal is to create a user interface that lists the images so users can select one. UIKit – the iOS user interface framework – has a lot of built-in user interface tools that we can draw on to build powerful apps that look and work the way users expect.</p><p>For this app, our main user interface component is called <code>UITableViewController</code>. It’s based on <code>UIViewController</code> – Apple’s most basic type of screen – but adds the ability to show rows of data that can be scrolled and selected. You can see <code>UITableViewController</code> in the Settings app, in Mail, in Notes, in Health, and many more – it’s powerful, flexible, and extremely fast, so it’s no surprise it gets used in so many apps.</p><p>Our existing <code>ViewController</code> screen is based on <code>UIViewController</code>, but what we want is to have it based on <code>UITableViewController</code> instead. This doesn’t take much to do, but you’re going to meet a new part of Xcode called Interface Builder.</p>",4),x=e("code",null,"ViewController.swift",-1),V=s(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That’s the line that says “create a new screen called <code>ViewController</code> and have it build on Apple’s own <code>UIViewController</code> screen.” I want you to change it to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UITableViewController</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>It’s only a small difference, but it’s an important one: it means <code>ViewController</code> now inherits its functionality from <code>UITableViewController</code> instead of <code>UIViewController</code>, which gives us a huge amount of extra functionality for free as you’ll see in a moment.</p><p>Behind the scenes, <code>UITableViewController</code> still builds on top of <code>UIViewController</code> – this is called a “class hierarchy”, and is a common way to build up functionality quickly.</p><p>We’ve changed the code for <code>ViewController</code> so that it builds on <code>UITableViewController</code>, but we also need to change the user interface to match. User interfaces can be written entirely in code if you want – and many developers do just that – but more commonly they are created using a graphical editor called Interface Builder. We need to tell Interface Builder (usually just called “IB”) that <code>ViewController</code> is a table view controller, so that it matches the change we just made in our code.</p>`,6),T=e("code",null,"ViewController.swift",-1),_=e("code",null,"Main.storyboard",-1),C=e("code",null,"Main.storyboard",-1),S=s('<figure><img src="https://hackingwithswift.com/img/books/hws/1-19@2x.png" alt="The Single View App template gives you one large, empty canvas to draw on." tabindex="0" loading="lazy"><figcaption>The Single View App template gives you one large, empty canvas to draw on.</figcaption></figure><p>That big white space is what produces the big white space when the app runs. If you drop new components into that space, they would be visible when the app runs. However, we don’t want to do that – in fact, we don’t want that big white space at all, so we’re going to delete it.</p><p>The best way to view, select, edit, and delete items in Interface Builder is to use the document outline, but there’s a good chance it will be hidden for you so the first thing to do is show it. Go to the Editor menu and choose Show Document Outline – it’s probably the third option from the top. If you see Hide Document Outline instead, it means the document outline is already visible.</p><p>The document outline shows you all the components in all the screens in your storyboard. You should see “View Controller Scene” already in there, so please select it, then press Backspace on your keyboard to remove it.</p><p>Instead of a boring old <code>UIViewController</code>, we want a fancy new <code>UITableViewController</code> to match the change we made in our code. To create one, press <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> to show the object library. Alternatively, if you dislike keyboard shortcuts you can go to the View menu and choose Libraries &gt; Show Library instead.</p><p>The object library floats over the Xcode window, and contains a selection of graphical components that you can drag out and re-arrange to your heart’s content. It contains quite a lot of components, so you might find it useful to enter a few letters into the “Objects” box to slim down the selection.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If you want the object library to remain open after you drag something out, use <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> and it will be a movable, resizable window when it appears.</p></div><p>Right now, the component we want is called Table View Controller. If you type “table” into the Filter box you’ll see Table View Controller, Table View, and Table View Cell. They are all different things, so please make sure you choose the Table View Controller – it has a yellow background in its icon.</p><p>Click on the Table View Controller component, then drag it out into the large open space that exists where the previous view controller was. When you let go to drop the table view controller onto the storyboard canvas, it will transform into a screen that looks like the below:</p><figure><img src="https://hackingwithswift.com/img/books/hws/1-20@2x.png" alt="Once you’ve deleted the original view controller and replaced it with a new table view controller, Xcode should look like this." tabindex="0" loading="lazy"><figcaption>Once you’ve deleted the original view controller and replaced it with a new table view controller, Xcode should look like this.</figcaption></figure><hr><h2 id="finishing-touches-for-the-user-interface" tabindex="-1"><a class="header-anchor" href="#finishing-touches-for-the-user-interface"><span>Finishing touches for the user interface</span></a></h2><p>Before we’re done here, we need to make a few small changes.</p>',13),O=e("code",null,"ViewController.swift",-1),U=e("kbd",null,"Alt",-1),A=e("kbd",null,"Cmd",-1),P=e("kbd",null,"3",-1),j=e("p",null,[t("Second, we need to tell Xcode that this new table view controller is what should be shown when the app first runs. To do that, press "),e("kbd",null,"Alt"),t("+"),e("kbd",null,"Cmd"),t("+"),e("kbd",null,"4"),t(" to activate the attributes inspector (or go to View > Utilities > Show Attributes Inspector), then look for the checkbox named “Is Initial View Controller” and make sure it’s checked.")],-1),q=e("p",null,"Third, I want you to use the document outline to look inside the new table view controller. Inside you should see it contains a “Table View”, which in turn contains “Cell”. A table view cell is responsible for displaying one row of data in a table, and we’re going to display one picture name in each cell.",-1),D=e("p",null,"Please select “Cell” then, in the attributes inspector, enter the text “Picture” into the text field marked Identifier. While you’re there, change the Style option at the top of the attributes inspector – it should be Custom right now, but please change it to Basic.",-1),R=e("p",null,"Finally, we’re going to place this whole table view controller inside something else. It’s something we don’t need to configure or worry about, but it’s an extremely common user interface element on iOS and I think you’ll recognize it immediately. It’s called a navigation controller, and you see it in action in apps like Settings and Mail – it provides the thin gray bar at the top of the screen, and is responsible for that right-to-left sliding animation that happens when you move between screens on iOS.",-1),B=e("code",null,"[Embed In]",-1),F=e("code",null,"[Navigation Controller]",-1),W=s(`<p>At this point you’ve done enough to take a look at the results of your work: press Xcode’s play button now, or press <kbd>Cmd</kbd>+<kbd>R</kbd> if you want to feel a bit elite. Once your code runs, you’ll now see the plain white box replaced with a large empty table view. If you click and drag your mouse around, you’ll see it scrolls and bounces as you would expect, although obviously there’s no data in there yet. You should also see a gray navigation bar at the top; that will be important later on.</p><hr><h2 id="showing-lots-of-rows" tabindex="-1"><a class="header-anchor" href="#showing-lots-of-rows"><span>Showing lots of rows</span></a></h2><p>The next step is to make the table view show some data. Specifically, we want it to show the list of “nssl” pictures, one per row. Apple’s <code>UITableViewController</code> data type provides default behaviors for a lot of things, but by default it says there are zero rows.</p><p>Our <code>ViewController</code> screen builds on <code>UITableViewController</code> and gets to override the default behavior of Apple’s table view to provide customization where needed. You only need to override the bits you want; the default values are all sensible.</p><p>To make the table show our rows, we need to override two behaviors: how many rows should be shown, and what each row should contain. This is done by writing two specially named methods, but when you’re new to Swift they might look a little strange at first. To make sure everyone can follow along, I’m going to take this slowly – this is the very first project, after all!</p><p>Let’s start with the method that sets how many rows should appear in the table. Add this code just after the <em>end</em> of <code>viewDidLoad()</code> – if you start typing “numberof” then you can use Xcode’s code completion to do most of the work for you:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> numberOfRowsInSection section<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> pictures<span class="token punctuation">.</span>count</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: that needs to be <em>after</em> the <em>end</em> of <code>viewDidLoad()</code>, which means after its closing brace.</p><p>That method contains the word “table view” three times, which is deeply confusing at first, so let’s break down what it means.</p><ul><li>The <code>override</code> keyword means the method has been defined already, and we want to override the existing behavior with this new behavior. If you didn&#39;t override it, then the previously defined method would execute, and in this instance it would say there are no rows.</li><li>The <code>func</code> keyword starts a new function or a new method; Swift uses the same keyword for both. Technically speaking a method is a function that appears inside a class, just like our <code>ViewController</code>, but otherwise there’s no difference.</li><li>The method’s name comes next: <code>tableView</code>. That doesn&#39;t sound very useful, but the way Apple defines methods is to ensure that the information that gets passed into them – the parameters – are named usefully, and in this case the very first thing that gets passed in is the table view that triggered the code. A table view, as you might have gathered, is the scrolling thing that will contain all our image names, and is a core component in iOS.</li><li>As promised, the next thing to come is <code>tableView: UITableView</code>, which is the table view that triggered the code. But this contains two pieces of information at once: <code>tableView</code> is the name that we can use to reference the table view inside the method, and <code>UITableView</code> is the data type – the bit that describes what it is.</li><li>The most important part of the method comes next: <code>numberOfRowsInSection section: Int</code>. This describes what the method actually does. We know it involves a table view because that&#39;s the name of the method, but the <code>numberOfRowsInSection</code> part is the actual action: this code will be triggered when iOS wants to know how many rows are in the table view. The <code>section</code> part is there because table views can be split into sections, like the way the Contacts app separates names by first letter. We only have one section, so we can ignore this number. The <code>Int</code> part means “this will be an integer,” which means a whole number like 3, 30, or 35678 number.”</li><li>Finally, <code>-&gt; Int</code> means “this method must return an integer”, which ought to be the number of rows to show in the table.</li></ul><p>There was one more thing I missed out, and I missed it out for a reason: it’s a bit confusing at this point in your Swift career. Did you notice that <code>_</code> in there? I hope you can remember that means the first parameter isn’t passed in using a name when called externally – this is a remnant of Objective-C, where the name of the first parameter was usually built right into the method name.</p><p>In this instance, the method is called <code>tableView()</code> because its first parameter is the table view that you’re working with. It wouldn’t make much sense to write <code>tableView(tableView: someTableView)</code>, so using the underscore means you would write <code>tableView(someTableView)</code> instead.</p><p>I&#39;m not going to pretend it&#39;s easy to understand how Swift methods look and work, but the best thing to do is not worry too much if you don&#39;t understand right now because after a few hours of coding they will be second nature.</p><p>At the very least you do need to know that these methods are referred to using their name (<code>tableView</code>) and any named parameters. Parameters without names are just referenced as underscores: <code>_</code>. So, to give it its full name, the method you just wrote is referred to as <code>tableView(_:numberOfRowsInSection:)</code> – clumsy, I know, which is why most people usually just talk about the important bit, for example, &quot;in the <code>numberOfRowsInSection</code> method.&quot;</p><p>We wrote only one line of code in the method, which was <code>return pictures.count</code>. That means “send back the number of pictures in our array,” so we’re asking that there be as many table rows as there are pictures.</p><hr><h2 id="dequeuing-cells" tabindex="-1"><a class="header-anchor" href="#dequeuing-cells"><span>Dequeuing cells</span></a></h2><p>That’s the first of two methods we need to write to complete this stage of the app. The second is to specify what each row should look like, and it follows a similar naming convention to the previous method. Add this code now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> cellForRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">UITableViewCell</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Picture&quot;</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span></span>
<span class="line">    cell<span class="token punctuation">.</span>textLabel<span class="token operator">?</span><span class="token punctuation">.</span>text <span class="token operator">=</span> pictures<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">return</span> cell</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let’s break it down into parts again, so you can see exactly how it works.</p><p>First, <code>override func tableView(_ tableView: UITableView</code> is identical to the previous method: the method name is just <code>tableView()</code>, and it will pass in a table view as its first parameter. The <code>_</code> means it doesn’t need to have a name sent externally, because it’s the same as the method name.</p><p>Second, <code>cellForRowAt indexPath: IndexPath</code> is the important part of the method name. The method is called <code>cellForRowAt</code>, and will be called when you need to provide a row. The row to show is specified in the parameter: <code>indexPath</code>, which is of type <code>IndexPath</code>. This is a data type that contains both a section number and a row number. We only have one section, so we can ignore that and just use the row number.</p><p>Third, <code>-&gt; UITableViewCell</code> means this method must return a table view cell. If you remember, we created one inside Interface Builder and gave it the identifier “Picture”, so we want to use that.</p><p>Here’s where a little bit of iOS magic comes in: if you look at the Settings app, you’ll see it can fit only about 12 rows on the screen at any given time, depending on the size of your phone.</p><p>To save CPU time and RAM, iOS only creates as many rows as it needs to work. When one rows moves off the top of the screen, iOS will take it away and put it into a reuse queue ready to be recycled into a new row that comes in from the bottom. This means you can scroll through hundreds of rows a second, and iOS can behave lazily and avoid creating any new table view cells – it just recycles the existing ones.</p><p>This functionality is baked right into iOS, and it’s exactly what our code does on this line:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> cell <span class="token operator">=</span> tableView<span class="token punctuation">.</span><span class="token function">dequeueReusableCell</span><span class="token punctuation">(</span>withIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Picture&quot;</span></span><span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> indexPath<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That creates a new constant called <code>cell</code> by dequeuing a recycled cell from the table. We have to give it the identifier of the cell type we want to recycle, so we enter the same name we gave Interface Builder: “Picture”. We also pass along the index path that was requested; this gets used internally by the table view.</p><p>That will return to us a table view cell we can work with to display information. You can create your own custom table view cell designs if you want to (more on that much later!), but we’re using the built-in Basic style that has a text label. That’s where line two comes in: it gives the text label of the cell the same text as a picture in our array. Here’s the code again:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">cell<span class="token punctuation">.</span>textLabel<span class="token operator">?</span><span class="token punctuation">.</span>text <span class="token operator">=</span> pictures<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The <code>cell</code> has a property called <code>textLabel</code>, but it’s optional: there might be a text label, or there might not be – if you had designed your own, for example. Rather than write checks to see if there is a text label or not, Swift lets us use a question mark – <code>textLabel?</code> – to mean “do this only if there is an actual text label there, or do nothing otherwise.”</p><p>We want to set the label text to be the name of the correct picture from our <code>pictures</code> array, and that’s exactly what the code does. <code>indexPath.row</code> will contain the row number we’re being asked to load, so we’re going to use that to read the corresponding picture from <code>pictures</code>, and place it into the cell’s text label.</p><p>The last line in the method is <code>return cell</code>. Remember, this method expects a table view cell to be returned, so we need to send back the one we created – that’s what the <code>return cell</code> does.</p><p>With those two pretty small methods in place, you can run your code again now and see how it looks. All being well you should now see 10 table view cells, each one with a different picture name inside. If you click on one of them it will turn gray, but nothing else will happen. Let’s fix that now…</p>`,35);function L(h,z){const r=a("VPCard"),i=a("router-link"),p=a("VidStack"),n=a("FontIcon");return f(),w("div",null,[e("h1",b,[e("a",y,[e("span",null,m(h.$frontmatter.title)+" 관련",1)])]),o(r,c(d({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),e("nav",k,[e("ul",null,[e("li",null,[o(i,{to:"#finishing-touches-for-the-user-interface"},{default:l(()=>[t("Finishing touches for the user interface")]),_:1})]),e("li",null,[o(i,{to:"#showing-lots-of-rows"},{default:l(()=>[t("Showing lots of rows")]),_:1})]),e("li",null,[o(i,{to:"#dequeuing-cells"},{default:l(()=>[t("Dequeuing cells")]),_:1})])])]),v,o(r,c(d({title:"Designing our interface | Hacking with iOS",desc:"Designing our interface",link:"https://hackingwithswift.com/read/1/3/designing-our-interface",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),o(p,{src:"youtube/0hMgOfF8tyQ"}),I,e("p",null,[t("We’ll get on to Interface Builder in a moment. First, though, we need to make a tiny change in "),o(n,{icon:"fa-brands fa-swift"}),x,t(". Find this line:")]),V,e("p",null,[t("Up to this point we’ve been working entirely in the file "),o(n,{icon:"fa-brands fa-swift"}),T,t(", but now I’d like you to use the project navigator (the pane on the left) to select the file "),o(n,{icon:"iconfont icon-xcode"}),_,t(". Storyboards contain the user interface for your app, and let you visualize some or all of it on a single screen.")]),e("p",null,[t("When you select "),o(n,{icon:"iconfont icon-xcode"}),C,t(", you’ll switch to the Interface Builder visual editor, and you should see something like the picture below:")]),S,e("p",null,[t("First, we need to tell Xcode that this storyboard table view controller is the same one we have in code inside "),o(n,{icon:"fa-brands fa-swift"}),O,t(". To do that, press "),U,t("+"),A,t("+"),P,t(" to activate the identity inspector (or go to View > Utilities > Show Identity Inspector), then look at the very top for a box named “Class”. It will have “UITableViewController” written in there in light gray text, but if you click the arrow on its right side you should see a dropdown menu that contains “ViewController” – please select that now.")]),j,q,D,R,e("p",null,[t("To place our table view controller into a navigation controller, all you need to do is go to the Editor menu and choose "),o(n,{icon:"iconfont icon-select"}),B,t(" > "),F,t(". Interface Builder will move your existing view controller to the right and add a navigation controller around it – you should see a simulated gray bar above your table view now. It will also move the “Is Initial View Controller” property to the navigation controller.")]),W])}const N=u(g,[["render",L],["__file","03-designing-our-interface.html.vue"]]),H=JSON.parse('{"path":"/hackingwithswift.com/read/01/03-designing-our-interface.html","title":"Designing our interface","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Designing our interface","description":"Article(s) > Designing our interface","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Designing our interface"},{"property":"og:description","content":"Designing our interface"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/01/03-designing-our-interface.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/01/03-designing-our-interface.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Designing our interface"}],["meta",{"property":"og:description","content":"Article(s) > Designing our interface"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/1-19@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Designing our interface\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/1-19@2x.png\\",\\"https://hackingwithswift.com/img/books/hws/1-20@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[{"level":2,"title":"Finishing touches for the user interface","slug":"finishing-touches-for-the-user-interface","link":"#finishing-touches-for-the-user-interface","children":[]},{"level":2,"title":"Showing lots of rows","slug":"showing-lots-of-rows","link":"#showing-lots-of-rows","children":[]},{"level":2,"title":"Dequeuing cells","slug":"dequeuing-cells","link":"#dequeuing-cells","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":11.2,"words":3360},"filePathRelative":"hackingwithswift.com/read/01/03-designing-our-interface.md","excerpt":"\\n"}');export{N as comp,H as data};
