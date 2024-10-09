import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,t as d,e as s,n as o,g as i,d as a,f as h,r as e,o as k}from"./app-BgNevrm5.js";const g={},m={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},f=n("nav",{class:"table-of-contents"},[n("ul")],-1),b=n("hr",null,null,-1),v=n("p",null,"It's time for us to start fixing the problems.",-1),y=n("div",{class:"hint-container important"},[n("p",{class:"hint-container-title"},"Important"),n("p",null,"when making performance changes you should change only one thing at a time, then re-test to make sure your change helped. If you changed two or more things and performance got better, which one worked? Or, if performance got worse, perhaps one thing worked and one didn't!")],-1),x=n("p",null,"Let's begin with the table view: you should have seen parts of the table view turn dark yellow when Color Offscreen-Rendered Yellow was selected. This is happening because the images are being rendered inefficiently: the rounded corners effect and the shadow are being done in real-time, which is computationally expensive.",-1),C=n("code",null,"SelectionViewController.swift",-1),z=n("code",null,"cellForRowAt",-1),S=h(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> original<span class="token punctuation">.</span>size<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> rounded <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addEllipse</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>origin<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">.</span>zero<span class="token punctuation">,</span> size<span class="token punctuation">:</span> original<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">clip</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    original<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">.</span>zero<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>image <span class="token operator">=</span> rounded</span>
<span class="line"></span>
<span class="line"><span class="token comment">// give the images a nice shadow to make them look a bit more dramatic</span></span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span>cgColor</span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowOpacity <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowRadius <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowOffset <span class="token operator">=</span> <span class="token class-name">CGSize</span><span class="token punctuation">.</span>zero</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are two new techniques being demonstrated here: creating a clipping path and rendering layer shadows.</p><p>We’ve used <code>UIGraphicsImageRenderer</code> before to create custom-rendered images, and the rendering here is made up of three commands: adding an ellipse and drawing a <code>UIImage</code> are both things you’ve seen before, but the call to <code>clip()</code> is new. As you know, you can create a path and draw it using two separate Core Graphics commands, but instead of running the draw command you can take the existing path and use it for clipping instead. This has the effect of only drawing things that lie inside the path, so when the <code>UIImage</code> is drawn only the parts that lie inside the elliptical clipping path are visible, thus rounding the corners.</p><p>The second new technique in this code is rendering layer shadows. iOS lets you add a basic shadow to any of its views, and it&#39;s a simple way to make something stand out on the screen. But it&#39;s not fast: it literally scans the pixels in the image to figure out what&#39;s transparent, then uses that information to draw the shadow correctly.</p><p>The combination of these two techniques creates a huge amount of work for iOS: it has to load the initial image, create a new image of the same size, render the first image into the second, the render the second image off-screen to calculate the shadow pixels, then render the whole finished product to the screen. When you hit a performance problem, you either drop the code that triggers the problem or you make it run faster.</p><p>In our case, we&#39;ll assume the designer insists the drop shadow is gorgeous so we need to make the code faster. There are several different approaches we could take, and I want to walk you through each of them so you can see the relative benefits of each.</p><p>The first possibility: Core Graphics is more than able of drawing shadows itself, which means we could handle the shadow rendering in our <code>UIGraphicsImageRenderer</code> pass rather than needing an extra render pass. To do that, we can use the Core Graphics <code>setShadow()</code> method, which takes three parameters: how far to offset the shadow, how much to blur it, and what color to use. You’ll notice there’s no way of specifying what shape the shadow should be, because Core Graphics has a simple but powerful solution: once you enable a shadow, it gets applied to everything you draw until you disable it by specifying a nil color.</p><p>So, we can replicate our current shadow like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> rounded <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setShadow</span><span class="token punctuation">(</span>offset<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">.</span>zero<span class="token punctuation">,</span> blur<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span>cgColor<span class="token punctuation">)</span></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">fillEllipse</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>origin<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">.</span>zero<span class="token punctuation">,</span> size<span class="token punctuation">:</span> original<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">setShadow</span><span class="token punctuation">(</span>offset<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">.</span>zero<span class="token punctuation">,</span> blur<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addEllipse</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>origin<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">.</span>zero<span class="token punctuation">,</span> size<span class="token punctuation">:</span> original<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">clip</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    original<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">.</span>zero<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice how the blur is 200 points, which is quite different from the shadow radius of 10 in the old code? The reason for this is important, because it highlights another significant problem in the code. When the original code set the shadow size using <code>cell.imageView?.layer.shadowRadius</code> it was specified in points relative to the size of the <code>UIImageView</code>. When the new code sets the shadow size using <code>setShadow()</code> it’s in points relative to the size of the image being drawn, which is created like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> original<span class="token punctuation">.</span>size<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The problem is that the images being loaded are 750x750 pixels at 1x resolution, so 1500x1500 at 2x and 2250x2250 at 3x. If you look at <code>viewDidLoad()</code> you’ll see that the row height is 90 points, so we’re loading huge pictures into a tiny space. That means loading a 1500x1500 image or larger, creating a second render buffer that size, rendering the image into it, and so on.</p><p>Clearly those images don’t need to be anything like that size, but sometimes you don’t have control over it. In this app you might be able to go back to the original designer and ask them to provide smaller assets, or if you were feeling ready for a fight you could resize them yourself, but what if you had fetched these assets from a remote server? And wait until you see the size of the images in the detail view – those images might only take up 500KB on disk, but when they are uncompressed by iOS they’ll need around 45 MB of RAM!</p><p>A second thing to notice is that the result of this new shadowing isn’t quite the same, because the shadow being rendered is now properly clipped inside the bounds of its image view. Although it’s more technically correct, it doesn’t look the same, and I’m going to assume that the original look – ugly as it was – was intentional.</p><p>So, option 1 – making Core Graphics draw the shadow – helps eliminate the second render pass, but it has very different results and a result we should rule it out. However, it did at least point us to an interesting problem: we’re squeezing very large images into a tiny space. iOS doesn’t know or care that this is happening because it just does what its told, but we have more information: we know the image isn’t needed at that crazy size, so we can use that knowledge to deliver huge performance increases.</p><p>First, change the rendering code to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> renderRect <span class="token operator">=</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>origin<span class="token punctuation">:</span> <span class="token punctuation">.</span>zero<span class="token punctuation">,</span> size<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> renderRect<span class="token punctuation">.</span>size<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> rounded <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">addEllipse</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> renderRect<span class="token punctuation">)</span></span>
<span class="line">    ctx<span class="token punctuation">.</span>cgContext<span class="token punctuation">.</span><span class="token function">clip</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    original<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> renderRect<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That still causes iOS to load and render a large image, but it now gets scaled down to the size it needs to be for actual usage, so it will immediately perform faster.</p><p>However, it still incurs a second rendering pass: iOS still needs to trace the resulting image to figure out where the shadow must be drawn. Calculating the shadow is hard, because iOS doesn’t know that we clipped it to be a circle so it needs to figure out what&#39;s transparent itself. Again, though, we have more information: the shadow is going to be a perfect circle, so why bother having iOS figure out the shadow for itself?</p><p>We can tell iOS not to automatically calculate the shadow path for our images by giving it the exact shadow path to use. The easiest way to do this is to create a new <code>UIBezierPath</code> that describes our image (an ellipse with width 90 and height 90), then convert it to a <code>CGPath</code> because <code>CALayer</code> doesn&#39;t understand what <code>UIBezierPath</code> is.</p><p>Here&#39;s the updated shadow code:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token comment">// give the images a nice shadow to make them look a bit more dramatic</span></span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>black<span class="token punctuation">.</span>cgColor</span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowOpacity <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowRadius <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowOffset <span class="token operator">=</span> <span class="token class-name">CGSize</span><span class="token punctuation">.</span>zero</span>
<span class="line">cell<span class="token punctuation">.</span>imageView<span class="token operator">?</span><span class="token punctuation">.</span>layer<span class="token punctuation">.</span>shadowPath <span class="token operator">=</span> <span class="token class-name">UIBezierPath</span><span class="token punctuation">(</span>ovalIn<span class="token punctuation">:</span> renderRect<span class="token punctuation">)</span><span class="token punctuation">.</span>cgPath</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you run that, you&#39;ll still see the same shadows everywhere, but the dark yellow color is gone. This means we’ve successfully eliminated the second render pass by giving iOS the pre-calculated shadow path, and we’ve also sped up drawing by scaling down the amount of working being done. You can turn off Color Offscreen-Rendered Yellow now; we don’t need it any more.</p><p>Working with rounded corners <em>and</em> shadows can be tricky, as you’ve seen here. If it weren’t for the shadowing, we could eliminate the first render pass by setting <code>layer.cornerRadius</code> to have iOS round the corners for us – it’s a nice and easy way to create rounded rectangle shapes (or even circles!) without any custom rendering code.</p>`,24);function _(p,I){const t=e("VPCard"),c=e("VidStack"),l=e("FontIcon");return k(),u("div",null,[n("h1",m,[n("a",w,[n("span",null,d(p.$frontmatter.title)+" 관련",1)])]),s(t,o(i({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,b,s(t,o(i({title:"Fixing the bugs: slow shadows | Hacking with iOS",desc:"Fixing the bugs: slow shadows",link:"https://hackingwithswift.com/read/30/4/fixing-the-bugs-slow-shadows",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),s(c,{src:"youtube/ggxcOnGm9tg"}),v,y,x,n("p",null,[a("You can find the code for this in "),s(l,{icon:"fa-brands fa-swift"}),C,a(", inside the "),z,a(" method:")]),S])}const O=r(g,[["render",_],["__file","04-fixing-the-bugs-slow-shadows.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/read/30/04-fixing-the-bugs-slow-shadows.html","title":"Fixing the bugs: slow shadows","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Fixing the bugs: slow shadows","description":"Article(s) > Fixing the bugs: slow shadows","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Fixing the bugs: slow shadows"},{"property":"og:description","content":"Fixing the bugs: slow shadows"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/30/04-fixing-the-bugs-slow-shadows.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/30/04-fixing-the-bugs-slow-shadows.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Fixing the bugs: slow shadows"}],["meta",{"property":"og:description","content":"Article(s) > Fixing the bugs: slow shadows"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fixing the bugs: slow shadows\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":5.37,"words":1610},"filePathRelative":"hackingwithswift.com/read/30/04-fixing-the-bugs-slow-shadows.md","excerpt":"\\n"}');export{O as comp,V as data};
