import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as n,t as h,e as t,n as i,g as o,d as e,f as l,r as a,o as m}from"./app-BgNevrm5.js";const w={},k={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},v=n("nav",{class:"table-of-contents"},[n("ul")],-1),b=n("hr",null,null,-1),f=l(`<p>After all the JSON parsing, it&#39;s time for something easy: we need to create a detail view controller class so that it can draw the petition content in an attractive way.</p><p>The easiest way for rendering complex content from the web is nearly always to use a <code>WKWebView</code>, and we&#39;re going to use the same technique from project 4 to create a <code>DetailViewController</code> that contains a web view.</p><p>Go to the File menu and choose New &gt; File, then choose iOS &gt; Source &gt; Cocoa Touch Class. Click Next, name it “DetailViewController”, make it a subclass of “UIViewController”, then click Next and Create.</p><p>Replace <em>all</em> the <code>DetailViewController</code> code with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">UIKit</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token class-name">WebKit</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">DetailViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> webView<span class="token punctuation">:</span> <span class="token class-name">WKWebView</span><span class="token operator">!</span></span>
<span class="line">    <span class="token keyword">var</span> detailItem<span class="token punctuation">:</span> <span class="token class-name">Petition</span><span class="token operator">?</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">loadView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        webView <span class="token operator">=</span> <span class="token class-name">WKWebView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        view <span class="token operator">=</span> webView</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is almost identical to the code from project 4, but you&#39;ll notice I&#39;ve added a <code>detailItem</code> property that will contain our <code>Petition</code> instance.</p><p>That was the easy bit. The hard bit is that we can&#39;t just drop the petition text into the web view, because it will probably look tiny. Instead, we need to wrap it in some HTML, which is a whole other language with its own rules and its own complexities.</p><p>Now, this series isn&#39;t called &quot;Hacking with HTML,&quot; so I don&#39;t intend to go into much detail here. However, I will say that the HTML we&#39;re going to use tells iOS that the page fits mobile devices, and that we want the font size to be 150% of the standard font size. All that HTML will be combined with the <code>body</code> value from our petition, then sent to the web view.</p><p>Place this in <code>viewDidLoad()</code>, directly beneath the call to <code>super.viewDidLoad()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">guard</span> <span class="token keyword">let</span> detailItem <span class="token operator">=</span> detailItem <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;&quot;&quot;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;</span>
<span class="line">&lt;style&gt; body { font-size: 150%; } &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">&lt;body&gt;</span>
<span class="line"></span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">detailItem<span class="token punctuation">.</span>body</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"></span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line">&quot;&quot;&quot;</span></span></span>
<span class="line"></span>
<span class="line">webView<span class="token punctuation">.</span><span class="token function">loadHTMLString</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span> baseURL<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That <code>guard</code> at the beginning unwraps <code>detailItem</code> into itself if it has a value, which makes sure we exit the method if for some reason we didn’t get any data passed into the detail view controller.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>It’s very common to unwrap variables using the same name, rather than create slight variations. In this case we could have used <code>guard let unwrappedItem = detailItem</code>, but that isn’t any better.</p></div><p>I&#39;ve tried to make the HTML as clear as possible, but if you don&#39;t care for HTML don&#39;t worry about it. What matters is that there&#39;s a Swift string called <code>html</code> that contains everything needed to show the page, and that&#39;s passed in to the web view&#39;s <code>loadHTMLString()</code> method so that it gets loaded. This is different to the way we were loading HTML before, because we aren&#39;t using a website here, just some custom HTML.</p><p>That&#39;s it for the detail view controller, it really is that simple. However, we still need to connect it to the table view controller by implementing the <code>didSelectRowAt</code> method.</p>`,14),y=n("code",null,"instantiateViewController()",-1),_=n("code",null,"Main.storyboard",-1),S=n("code",null,"DetailViewController",-1),T=n("code",null,"didSelectRowAt",-1),V=l(`<p>So, add this new method to your <code>ViewController</code> class now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">tableView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> tableView<span class="token punctuation">:</span> <span class="token class-name">UITableView</span><span class="token punctuation">,</span> didSelectRowAt indexPath<span class="token punctuation">:</span> <span class="token class-name">IndexPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> vc <span class="token operator">=</span> <span class="token class-name">DetailViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    vc<span class="token punctuation">.</span>detailItem <span class="token operator">=</span> petitions<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span></span>
<span class="line">    navigationController<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">pushViewController</span><span class="token punctuation">(</span>vc<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go ahead and run the project now by pressing <kbd>Cmd</kbd>+<kbd>R</kbd> or clicking play, then tap on a row to see more detail about each petition. Some petitions don’t have detail text, but most do – try a few and see what you can find.</p>`,3);function L(c,H){const s=a("VPCard"),p=a("VidStack"),r=a("FontIcon");return m(),u("div",null,[n("h1",k,[n("a",g,[n("span",null,h(c.$frontmatter.title)+" 관련",1)])]),t(s,i(o({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),v,b,t(s,i(o({title:"Rendering a petition: loadHTMLString | Hacking with iOS",desc:"Rendering a petition: loadHTMLString",link:"https://hackingwithswift.com/read/7/4/rendering-a-petition-loadhtmlstring",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),t(p,{src:"youtube/T6wvsQ78w0c"}),f,n("p",null,[e("Previously we used the "),y,e(" method to load a view controller from "),t(r,{icon:"iconfont icon-xcode"}),_,e(", but in this project "),S,e(" isn’t in the storyboard – it’s just a free-floating class. This makes "),T,e(" easier, because it can load the class directly rather than loading the user interface from a storyboard.")]),V])}const R=d(w,[["render",L],["__file","04-rendering-a-petition-loadhtmlstring.html.vue"]]),x=JSON.parse('{"path":"/hackingwithswift.com/read/07/04-rendering-a-petition-loadhtmlstring.html","title":"Rendering a petition: loadHTMLString","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Rendering a petition: loadHTMLString","description":"Article(s) > Rendering a petition: loadHTMLString","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Rendering a petition: loadHTMLString"},{"property":"og:description","content":"Rendering a petition: loadHTMLString"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/07/04-rendering-a-petition-loadhtmlstring.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/07/04-rendering-a-petition-loadhtmlstring.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Rendering a petition: loadHTMLString"}],["meta",{"property":"og:description","content":"Article(s) > Rendering a petition: loadHTMLString"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rendering a petition: loadHTMLString\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.63,"words":790},"filePathRelative":"hackingwithswift.com/read/07/04-rendering-a-petition-loadhtmlstring.md","excerpt":"\\n"}');export{R as comp,x as data};
