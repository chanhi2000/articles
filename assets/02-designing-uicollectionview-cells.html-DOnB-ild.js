import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as e,t as u,e as o,n as a,g as l,d as t,f as c,r as n,o as g}from"./app-BgNevrm5.js";const w={},m={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},b=e("nav",{class:"table-of-contents"},[e("ul")],-1),k=e("hr",null,null,-1),y=e("code",null,"UITableViewController",-1),v=e("code",null,"UICollectionViewController",-1),C=e("code",null,"ViewController.swift",-1),_=e("code",null,"UICollectionViewController",-1),I=c(`<p>So, find this line:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>And change it to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UICollectionViewController</span> <span class="token punctuation">{</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,4),V=e("code",null,"Main.storyboard",-1),x=e("em",null,"not",-1),q=c(`<p>Use the document outline to select the collection view inside the collection view controller, then go to the size inspector and set Cell Size to have the width 140 and height 180. Now set the section insets for top, bottom, left and right to all be 10.</p><p>Collection views are extremely similar to table views, with the exception that they display as grids rather than as simple rows. But while the display is different, the underlying method calls are so similar that you could probably dive right in yourself if you wanted! (Don’t worry, though: I’ll walk you through it.)</p><p>Our collection view already has one prototype cell, which is the empty square you&#39;ll see in the top-left corner. This works the same as with table views – you&#39;ll remember we changed the initial cell in project 7 so that we could add subtitles.</p><p>Select that collection view cell now, then go to the attributes inspector: change its Background from &quot;Default&quot; (transparent) to white and give it the identifier “Person” so that we can reference it in code. Now place a <code>UIImageView</code> in there, with X:10, Y:10, width 120 and height 120. We&#39;ll be using this to show pictures of people&#39;s faces.</p><p>Place a <code>UILabel</code> in there too, with X:10, Y:134, width 120 and height 40. In the attributes inspector, change the label&#39;s font by clicking the T button and choosing &quot;Custom&quot; for font, &quot;Marker Felt&quot; for family, and &quot;Thin&quot; for style. Give it the font size 16, which is 1 smaller than the default, then set its alignment to be centered and its number of lines property to be 2.</p><figure><img src="https://hackingwithswift.com/img/books/hws/10-2@2x.png" alt="Your collection view cell design should have one image view and one label." tabindex="0" loading="lazy"><figcaption>Your collection view cell design should have one image view and one label.</figcaption></figure><p>So far this has been fairly usual storyboard work, but now we&#39;re going to do something we&#39;ve never done before: create a custom class for our cell. This is needed because our collection view cell has two views that we created – the image view and the label – and we need a way to manipulate this in code. The shortcut way would be to give them unique tags and give them variables when the app runs, but we&#39;re going to do it The Proper Way this time so you can learn.</p><p>Go to the File menu and choose New &gt; File, then select iOS &gt; Source &gt; Cocoa Touch Class and click Next. You&#39;ll be asked to fill in two text fields: where it says &quot;Subclass of&quot; you should enter &quot;UICollectionViewCell&quot;, and where it says &quot;Class&quot; enter &quot;PersonCell&quot;. Click Next then Create, and Xcode will create a new class called <code>PersonCell</code> that inherits from <code>UICollectionViewCell</code>.</p><p>This new class needs to be able to represent the collection view layout we just defined in Interface Builder, so it just needs two outlets. Give the class these two properties:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@IBOutlet</span> <span class="token keyword">var</span> imageView<span class="token punctuation">:</span> <span class="token class-name">UIImageView</span><span class="token operator">!</span></span>
<span class="line"><span class="token attribute atrule">@IBOutlet</span> <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">UILabel</span><span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now go back to Interface Builder and select the collection view cell in the document outline. Select the identity inspector (<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>3</kbd>) and you&#39;ll see next to Class the word &quot;UICollectionViewCell&quot; in gray text. That&#39;s telling us that the cell is its default class type.</p><p>We want to use our custom class here, so enter &quot;PersonCell&quot; and hit return. You&#39;ll see that &quot;PersonCell&quot; now appears in the document outline.</p><p>Now that Interface Builder knows that the cell is actually a <code>PersonCell</code>, we can connect its outlets. Go to the connections inspector (it&#39;s the last one, so <kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>6</kbd>) with the cell selected and you&#39;ll see <code>imageView</code> and <code>name</code> in there, both with empty circles to their right. That empty circle has exactly the same meaning as when you saw it with outlets in code: there is no connection between the storyboard and code for this outlet.</p><p>To make a connection from the connections inspector, just click on the empty circle next to <code>imageView</code> and drag a line over the view you want to connect. In our case, that means dragging over the image view in our custom cell. Now connect <code>name</code> to the label, and you&#39;re done with the storyboard.</p><figure><img src="https://hackingwithswift.com/img/books/hws/10-3@2x.png" alt="You can create and destroy Interface Builder outlets using the connections inspector." tabindex="0" loading="lazy"><figcaption>You can create and destroy Interface Builder outlets using the connections inspector.</figcaption></figure>`,15);function U(r,S){const i=n("VPCard"),d=n("VidStack"),s=n("FontIcon");return g(),p("div",null,[e("h1",m,[e("a",f,[e("span",null,u(r.$frontmatter.title)+" 관련",1)])]),o(i,a(l({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,k,o(i,a(l({title:"Designing UICollectionView cells | Hacking with iOS",desc:"Designing UICollectionView cells",link:"https://hackingwithswift.com/read/10/2/designing-uicollectionview-cells",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),o(d,{src:"youtube/gtRrcnj5QCI"}),e("p",null,[t("We’ve used "),y,t(" a few times so far, but this time we’re going to use "),v,t(" instead. The procedure is quite similar, and starts by opening "),o(s,{icon:"fa-brands fa-swift"}),C,t(" and making it inherit from "),_,t(" instead.")]),I,e("p",null,[t("Now open "),o(s,{icon:"iconfont icon-xcode"}),V,t(" in Interface Builder and delete the existing view controller. In its place, drag out a Collection View Controller ("),x,t(" a regular collection view!), then mark it as the initial view controller and embed it inside a navigation controller. Make sure you also use the identity inspector to change its class to “ViewController” so that it points to our class in code.")]),q])}const T=h(w,[["render",U],["__file","02-designing-uicollectionview-cells.html.vue"]]),B=JSON.parse('{"path":"/hackingwithswift.com/read/10/02-designing-uicollectionview-cells.html","title":"Designing UICollectionView cells","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Designing UICollectionView cells","description":"Article(s) > Designing UICollectionView cells","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Designing UICollectionView cells"},{"property":"og:description","content":"Designing UICollectionView cells"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/10/02-designing-uicollectionview-cells.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/10/02-designing-uicollectionview-cells.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Designing UICollectionView cells"}],["meta",{"property":"og:description","content":"Article(s) > Designing UICollectionView cells"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/10-2@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Designing UICollectionView cells\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/10-2@2x.png\\",\\"https://hackingwithswift.com/img/books/hws/10-3@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.3,"words":991},"filePathRelative":"hackingwithswift.com/read/10/02-designing-uicollectionview-cells.md","excerpt":"\\n"}');export{T as comp,B as data};
