import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as n,t as r,e as a,n as t,g as e,f as u,r as p,o as d}from"./app-BgNevrm5.js";const m={},k={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},g=n("nav",{class:"table-of-contents"},[n("ul")],-1),b=n("hr",null,null,-1),w=u(`<p>Add one final case to your switch/case statement calling a method <code>drawImagesAndText()</code>, because no discussion of Core Graphics would be useful without telling you how to draw images and text to your context.</p><p>If you have an attributed string in Swift, how can you place it into a graphic? The answer is simpler than you think: attributed strings have a built-in method called <code>draw(with:)</code> that draws the string in a rectangle you specify. Even better, your attributed string styles are used to customize the font and size, the formatting, the line wrapping and more all with that one method.</p><p>Remarkably, the same is true of <code>UIImage</code>: any image can be drawn straight to a context, and it will even take into account the coordinate reversal of Core Graphics.</p><p>To help make the code clearer, here&#39;s a bulleted list of all the things the method needs to do:</p><ol><li>Create a renderer at the correct size.</li><li>Define a paragraph style that aligns text to the center.</li><li>Create an attributes dictionary containing that paragraph style, and also a font.</li><li>Wrap that attributes dictionary and a string into an instance of <code>NSAttributedString</code>.</li><li>Load an image from the project and draw it to the context.</li><li>Update the image view with the finished result.</li></ol><p>Below is that the same process, now coded in Swift. As per usual, the number comments match the list above:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">drawImagesAndText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 1</span></span>
<span class="line">    <span class="token keyword">let</span> renderer <span class="token operator">=</span> <span class="token class-name">UIGraphicsImageRenderer</span><span class="token punctuation">(</span>size<span class="token punctuation">:</span> <span class="token class-name">CGSize</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> img <span class="token operator">=</span> renderer<span class="token punctuation">.</span>image <span class="token punctuation">{</span> ctx <span class="token keyword">in</span></span>
<span class="line">        <span class="token comment">// 2</span></span>
<span class="line">        <span class="token keyword">let</span> paragraphStyle <span class="token operator">=</span> <span class="token class-name">NSMutableParagraphStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        paragraphStyle<span class="token punctuation">.</span>alignment <span class="token operator">=</span> <span class="token punctuation">.</span>center</span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 3</span></span>
<span class="line">        <span class="token keyword">let</span> attrs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">systemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">.</span>paragraphStyle<span class="token punctuation">:</span> paragraphStyle</span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 4</span></span>
<span class="line">        <span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;The best-laid schemes o&#39;\\nmice an&#39; men gang aft agley&quot;</span></span></span>
<span class="line">        <span class="token keyword">let</span> attributedString <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> string<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> attrs<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 5</span></span>
<span class="line">        attributedString<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">448</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">448</span><span class="token punctuation">)</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">.</span>usesLineFragmentOrigin<span class="token punctuation">,</span> context<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 5</span></span>
<span class="line">        <span class="token keyword">let</span> mouse <span class="token operator">=</span> <span class="token class-name">UIImage</span><span class="token punctuation">(</span>named<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;mouse&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        mouse<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> <span class="token class-name">CGPoint</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 6</span></span>
<span class="line">    imageView<span class="token punctuation">.</span>image <span class="token operator">=</span> img</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That completes our project – good job!</p><figure><img src="https://hackingwithswift.com/img/books/hws/27-4@2x.png" alt="Strings and UIImages have built-in methods that let you draw them to a Core Graphics context." tabindex="0" loading="lazy"><figcaption>Strings and UIImages have built-in methods that let you draw them to a Core Graphics context.</figcaption></figure>`,9);function v(o,f){const s=p("VPCard"),i=p("VidStack");return d(),l("div",null,[n("h1",k,[n("a",h,[n("span",null,r(o.$frontmatter.title)+" 관련",1)])]),a(s,t(e({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,b,a(s,t(e({title:"Images and text | Hacking with iOS",desc:"Images and text",link:"https://hackingwithswift.com/read/27/6/images-and-text",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),a(i,{src:"youtube/I12-RAh0BxI"}),w])}const S=c(m,[["render",v],["__file","06-images-and-text.html.vue"]]),I=JSON.parse('{"path":"/hackingwithswift.com/read/27/06-images-and-text.html","title":"Images and text","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Images and text","description":"Article(s) > Images and text","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Images and text"},{"property":"og:description","content":"Images and text"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/27/06-images-and-text.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/27/06-images-and-text.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Images and text"}],["meta",{"property":"og:description","content":"Article(s) > Images and text"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/27-4@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Images and text\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/27-4@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.64,"words":492},"filePathRelative":"hackingwithswift.com/read/27/06-images-and-text.md","excerpt":"\\n"}');export{S as comp,I as data};
