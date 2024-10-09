import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as s,t as h,e as a,n as t,g as i,d as n,f as c,r as l,o as m}from"./app-BgNevrm5.js";const k={},g={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},f=s("nav",{class:"table-of-contents"},[s("ul")],-1),v=s("hr",null,null,-1),b=s("p",null,"We're going to start simple, and work our way up. Along the way you'll start to see some of the things that SwiftUI makes easy, and some of the things that are a bit harder.",-1),y=s("code",null,"ContentView.swift",-1),x=s("code",null,"ContentView",-1),I=c(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;globe&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">imageScale</span><span class="token punctuation">(</span><span class="token punctuation">.</span>large<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>accentColor<span class="token punctuation">)</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello, world!&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That isn&#39;t much code, but it already tells us a lot:</p><ol><li>Views are structs in SwiftUI.</li><li>All views must conform to the <code>View</code> protocol.</li><li>That protocol requires a computed property called <code>body</code> that contains the actual layout for the view.</li><li>It returns <code>some View</code>, which is a Swift feature called <em>opaque return types</em> – it means “one specific sort of view, but we don&#39;t really care which one.”</li><li>Inside our content view is a small amount of UI: an image showing a globe icon and some text saying “Hello, world”, both wrapped up in a <code>VStack</code> to make them vertically aligned. We&#39;ll be looking at these views in more detail as we progress.</li><li>There&#39;s are some method calls in place: <code>.imageScale()</code>, <code>.foregroundStyle()</code>, and <code>padding()</code>. In SwiftUI we call these <em>modifiers</em> because they modify the way the text view looks or acts.</li></ol><p>You should also see a preview pane on the right of Xcode. This updates as you type, which makes it a great way to see your changes as you work. If you don&#39;t see the preview pane on the right, go to the Editor menu and choose Canvas.</p><p>In the event that Xcode&#39;s preview area stops – which will happen quite often – you can press <kbd>Opt</kbd>+<kbd>Cmd</kbd>+<kbd>P</kbd> to make it resume showing your layouts.</p><p><strong>This is really important so I&#39;m repeating it: pressing <kbd>Cmd</kbd>+<kbd>Opt</kbd>+<kbd>P</kbd> will make your SwiftUI preview update.</strong></p><figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/2-3~dark.png" alt="Xcode showing code on one side and the SwiftUI preview area on the other side." tabindex="0" loading="lazy"><figcaption>Xcode showing code on one side and the SwiftUI preview area on the other side.</figcaption></figure><p>In our app this screen will show us a list of items from a menu, so we&#39;re going to use a <code>List</code> view instead of Xcode&#39;s default template code.</p><p>So, replace the current text view with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">List</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the preview updates you&#39;ll now see the equivalent of UIKit&#39;s <code>UITableView</code> with three pieces of text, all saying “Hello World”. This is a <em>static</em> list view – we&#39;re sending in three pieces of fixed data, so it interprets them as three rows in the table.</p><p>In our app the menu will contain a list of items that can be ordered, and tapping one of them will show a new screen with details about that order item. This works just like in UIKit: we wrap our table in a navigation control.</p><p>In SwiftUI this navigation control is a <code>NavigationStack</code>, which combines the display styling of <code>UINavigationBar</code> and the view controller stack behavior of <code>UINavigationController</code>. To bring one in, just add <code>NavigationStack</code> around your list, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">List</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When the preview updates you&#39;ll see things look the same, but that&#39;s only because we haven&#39;t given it a title yet.</p><p>Earlier I mentioned the <code>padding()</code> modifier briefly, saying modifiers got that name because they modify the way views look or act. SwiftUI has many modifiers – hundreds, easily – and each one lets you customize the behavior of a view in one very specific way.</p><p>Yes, modifiers <em>look</em> like regular Swift methods, but they are more complex because they actually <em>change</em> what they apply to. In simple terms, if you have some text and apply the <code>padding()</code> modifier, you don&#39;t just get some text back that happens to have some space around it – you actually get a different <em>type</em> back.</p><p>In this case, we want to apply a <code>navigationTitle()</code> modifier to our list view, which accepts some sort of text to show in the navigation bar. So, we&#39;d write this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">List</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">navigationTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Menu&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Yes, the modifier is attached to the list rather than the navigation stack – think of how we&#39;d set the title of a <code>UIViewController</code> rather than try to set the title of a <code>UINavigationController</code>.</p><figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/2-4~dark.png" alt="Xcode showing code with three list items, and the SwiftUI preview showing that rendered in a virtual device." tabindex="0" loading="lazy"><figcaption>Xcode showing code with three list items, and the SwiftUI preview showing that rendered in a virtual device.</figcaption></figure><p>If you try running the app now you&#39;ll see that it all works exactly as we would expect – the table scrolls around, the navigation bar shrinks as you scroll, and so on. One of the great things that SwiftUI does is give us modern system behavior by default, so we get large navigation bar titles as standard.</p><p>Static text works fine when you have fixed table cells, but in our case we have lots of menu items to load across a number of sections – breakfast, mains, dessert, and drinks. What we <em>really</em> want to do is load our menu data from JSON, then use <em>that</em> for our list items, and that&#39;s actually not too hard to accomplish.</p>`,23),S=s("code",null,"Helper.swift",-1),_=s("code",null,"Codable",-1),q=s("code",null,"menu.json",-1),T=s("code",null,"ContentView",-1),U=c(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> menu <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">MenuSection</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;menu.json&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Next we need to make our list go over the sections in our menu. This is done by using a <code>ForEach</code> block, which loops over items in an array and repeats whatever is inside:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">List</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ForEach</span><span class="token punctuation">(</span>menu<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Hello World&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The opening braces after <code>List</code> and <code>ForEach</code> actually signify the start of a closure, and in the case of <code>ForEach</code> SwiftUI will pass into the closure each section from the array so that we can configure it.</p><p>So, we need to accept that section by modifying the code to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">ForEach</span><span class="token punctuation">(</span>menu<span class="token punctuation">)</span> <span class="token punctuation">{</span> section <span class="token keyword">in</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>That <em>almost</em> works, but there&#39;s one last thing we need to do. SwiftUI needs to know how to identify every cell in our table – it needs to know exactly which is which, so it can add and remove things for us if we ask. When we had a static list this wasn&#39;t a problem because it could see there were three, but now we have a dynamic list we need to tell it something about each section that makes it unique.</p>`,7),E=s("code",null,"Menu.swift",-1),H=s("code",null,"MenuSection",-1),W=s("code",null,"MenuItem",-1),j=s("code",null,"id",-1),V=s("code",null,"UUID",-1),B=c(`<p>We can tell SwiftUI to use those identifiers by making the two types conform to <code>Identifiable</code>. This protocol has only one requirement, which is that conforming types must have a property called <code>id</code> that can identify them uniquely. We already have that, so just adding <code>Identifiable</code> to those two types is enough:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">MenuSection</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span><span class="token punctuation">,</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>And:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">MenuItem</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span><span class="token punctuation">,</span> <span class="token class-name">Equatable</span><span class="token punctuation">,</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you run the code now you&#39;ll see twelve rows containing “Hello World” – something you might not have expected.</p><p>What&#39;s changed is that we now have a <em>dynamic</em> list, and our <code>ForEach</code> will execute the body of its closure – three text views – once for every item in our menu sections. We have four sections, and each one has been given three text views, so we end up with 12 in total.</p><p>To fix this, we&#39;re going to ask for <em>one</em> text view per section, and give it the name of our section to display:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">List</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ForEach</span><span class="token punctuation">(</span>menu<span class="token punctuation">)</span> <span class="token punctuation">{</span> section <span class="token keyword">in</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span>section<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next let&#39;s add the items inside each section. This is another <code>ForEach</code> inside the section <code>ForEach</code>, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">List</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ForEach</span><span class="token punctuation">(</span>menu<span class="token punctuation">)</span> <span class="token punctuation">{</span> section <span class="token keyword">in</span></span>
<span class="line">        <span class="token class-name">Text</span><span class="token punctuation">(</span>section<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token class-name">ForEach</span><span class="token punctuation">(</span>section<span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you&#39;ll see lots of table rows, with some containing section names (“Breakfast”, “Mains”, etc) and some containing menu item names (“Full English”, “Superfood Salad”, etc).</p><figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/2-5~dark.png" alt="Xcode showing a SwiftUI list with many items, and a navigation bar at the top. Next to it is the code required to make the preview." tabindex="0" loading="lazy"><figcaption>Xcode showing a SwiftUI list with many items, and a navigation bar at the top. Next to it is the code required to make the preview.</figcaption></figure><p>While this works, it&#39;s not ideal – it doesn&#39;t create any visual structure in our table, so we&#39;re going to break it up. The standard UIKit way of doing this is with table view sections, and SwiftUI gives us the <code>Section</code> view just for that. We can replace <code>Text(section.name)</code> with a Section using the section name for its title, which will be used as the text at the start of the section. The inner <code>ForEach</code> – the one containing our menu items – is then <em>inside</em> the section, so SwiftUI will understand how we&#39;ve grouped things together.</p><p>The end result looks like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">List</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ForEach</span><span class="token punctuation">(</span>menu<span class="token punctuation">)</span> <span class="token punctuation">{</span> section <span class="token keyword">in</span></span>
<span class="line">        <span class="token class-name">Section</span><span class="token punctuation">(</span>section<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">ForEach</span><span class="token punctuation">(</span>section<span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span></span>
<span class="line">                <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default SwiftUI&#39;s lists use the “inset grouped” style of <code>UITableView</code>, but we can change that by adding another modifier after <code>navigationTitle()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token punctuation">.</span><span class="token function">listStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>grouped<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/2-6~dark.png" alt="The SwiftUI list is now split neatly into grouped sections." tabindex="0" loading="lazy"><figcaption>The SwiftUI list is now split neatly into grouped sections.</figcaption></figure>`,18),N={class:"hint-container details"},L=s("summary",null,"Similar solutions…",-1);function F(p,C){const e=l("VPCard"),u=l("VidStack"),o=l("FontIcon");return m(),d("div",null,[s("h1",g,[s("a",w,[s("span",null,h(p.$frontmatter.title)+" 관련",1)])]),a(e,t(i({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,v,a(e,t(i({title:"Building a menu using List | SwiftUI by Example",desc:"Building a menu using List",link:"https://hackingwithswift.com/quick-start/swiftui/building-a-menu-using-list",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(u,{src:"youtube/62agNUDHh3U"}),b,s("p",null,[n("In "),a(o,{icon:"fa-brands fa-swift"}),y,n(" is a basic struct representing the only screen in our app: "),x,n(". It looks like this:")]),I,s("p",null,[n("First we need to load our data. The "),a(o,{icon:"fa-brands fa-swift"}),S,n(" file you already imported contains code for loading "),_,n(" JSON from the app bundle, which is perfect for loading our "),a(o,{icon:"iconfont icon-json"}),q,n(" file. So, add this property to the "),T,n(" struct now:")]),U,s("p",null,[n("If you open "),a(o,{icon:"fa-brands fa-swift"}),E,n(" you'll see structs that define "),H,n(" and "),W,n(", and both of them have "),j,n(" properties that contain a "),V,n(" – a universally unique identifier. This is perfect for our use, because every menu item in every section has a unique identifier so SwiftUI can know which is which.")]),B,s("details",N,[L,a(e,t(i({title:"How to show a menu when a button is pressed | SwiftUI by Example",desc:"How to show a menu when a button is pressed",link:"/hackingwithswift.com/swiftui/how-to-show-a-menu-when-a-button-is-pressed.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(e,t(i({title:"How to let users pick options from a menu | SwiftUI by Example",desc:"How to let users pick options from a menu",link:"/hackingwithswift.com/swiftui/how-to-let-users-pick-options-from-a-menu.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(e,t(i({title:"How to show a context menu | SwiftUI by Example",desc:"How to show a context menu",link:"/hackingwithswift.com/swiftui/how-to-show-a-context-menu.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(e,t(i({title:"SwiftUI tutorial: Building a complete project | SwiftUI by Example",desc:"SwiftUI tutorial: Building a complete project",link:"https://hackingwithswift.com/quick-start/swiftui/swiftui-tutorial-building-a-complete-project",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(e,t(i({title:"How to allow row selection in a list | SwiftUI by Example",desc:"How to allow row selection in a list",link:"/hackingwithswift.com/swiftui/how-to-allow-row-selection-in-a-list.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const X=r(k,[["render",F],["__file","building-a-menu-using-list.html.vue"]]),P=JSON.parse('{"path":"/hackingwithswift.com/swiftui/building-a-menu-using-list.html","title":"Building a menu using List","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Building a menu using List","description":"Article(s) > Building a menu using List","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Building a menu using List"},{"property":"og:description","content":"Building a menu using List"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/building-a-menu-using-list.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/building-a-menu-using-list.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Building a menu using List"}],["meta",{"property":"og:description","content":"Article(s) > Building a menu using List"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/2-3~dark.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2023-06-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Building a menu using List\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/2-3~dark.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/2-4~dark.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/2-5~dark.png\\",\\"https://hackingwithswift.com/img/books/quick-start/swiftui/2-6~dark.png\\"],\\"datePublished\\":\\"2023-06-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2023-06-16T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":6.54,"words":1961},"filePathRelative":"hackingwithswift.com/swiftui/building-a-menu-using-list.md","localizedDate":"2023년 6월 16일","excerpt":"\\n"}');export{X as comp,P as data};
