import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,b as e,t as d,e as t,n as o,g as s,w as l,d as a,f as m,r as i,o as g}from"./app-BgNevrm5.js";const w={},y={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},v=e("hr",null,null,-1),_=e("p",null,"Hold up your right hand and repeat after me: “I will never ship an app without running it through Instruments first.” It doesn't take long, it's not difficult, and I promise it will pay off – your user interfaces will be smoother, your code will run faster, and you'll avoid wasting memory, all using a tool that's completely free and you already have installed.",-1),b=e("p",null,"I have, predictably, only touched briefly on the many features of Instruments, Xcode, and the Simulator here, but I hope I've inspired you to learn more. Instruments can tell you exactly what each CPU core is doing at any given time, it can tell you when every object was created and when it was destroyed along with what code triggered it, and it can even simulate user interface interactions to help you stress test your apps!",-1),S=e("p",null,[a("At the same time, I also snuck in a few more techniques for you to try in your own apps – layer shadows, Core Graphics clipping, and how "),e("code",null,"UIImage"),a(" has an automatic cache for when you need it.")],-1),I=e("p",null,"So: all in all another great technique project, and you’ve learned some important skills that will be useful in every iOS project you make from now on.",-1),x=e("hr",null,null,-1),j=e("h2",{id:"review-what-you-learned",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#review-what-you-learned"},[e("span",null,"Review what you learned")])],-1),A=e("p",null,"Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.",-1),R=m(`<hr><h2 id="challenge" tabindex="-1"><a class="header-anchor" href="#challenge"><span>Challenge</span></a></h2><p>One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try your new knowledge to make sure you fully understand what’s going on:</p><ol><li>Go through project 30 and remove all the force unwraps. Note: implicitly unwrapped optionals are not the same thing as force unwraps – you’re welcome to fix the implicitly unwrapped optionals too, but that’s a bonus task.</li><li>Pick any of the previous 29 projects that interests you, and try exploring it using the Allocations instrument. Can you find any objects that are persistent when they should have been destroyed?</li><li>For a tougher challenge, take the image generation code out of <code>cellForRowAt</code>: generate all images when the app first launches, and use those smaller versions instead. For bonus points, combine the <code>getDocumentsDirectory()</code> method I introduced in project 10 so that you save the resulting cache to make sure it never happens again.</li></ol><p>As a reminder, here’s the code for <code>getDocumentsDirectory()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">getDocumentsDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token constant">URL</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> paths <span class="token operator">=</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">urls</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>documentDirectory<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>userDomainMask<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> paths<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function C(c,P){const n=i("VPCard"),r=i("router-link"),p=i("VidStack");return g(),h("div",null,[e("h1",y,[e("a",f,[e("span",null,d(c.$frontmatter.title)+" 관련",1)])]),t(n,o(s({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),e("nav",k,[e("ul",null,[e("li",null,[t(r,{to:"#review-what-you-learned"},{default:l(()=>[a("Review what you learned")]),_:1})]),e("li",null,[t(r,{to:"#challenge"},{default:l(()=>[a("Challenge")]),_:1})])])]),v,t(n,o(s({title:"Wrap up | Hacking with iOS",desc:"Wrap up",link:"https://hackingwithswift.com/read/30/7/wrap-up",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),t(p,{src:"youtube/Cy8NswcPZAE"}),_,b,S,I,x,j,A,t(n,o(s({title:"Review – Project 30: Instruments – Hacking with Swift",desc:"Interactive tests that help gauge your progress learning Swift",link:"https://hackingwithswift.com/review/hws/project-30-instruments",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),R])}const O=u(w,[["render",C],["__file","07-wrap-up.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/read/30/07-wrap-up.html","title":"Wrap up","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Wrap up","description":"Article(s) > Wrap up","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Wrap up"},{"property":"og:description","content":"Wrap up"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/30/07-wrap-up.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/30/07-wrap-up.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Wrap up"}],["meta",{"property":"og:description","content":"Article(s) > Wrap up"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Wrap up\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"next":"/hackingwithswift.com/read/31/overview.md","isOriginal":false},"headers":[{"level":2,"title":"Review what you learned","slug":"review-what-you-learned","link":"#review-what-you-learned","children":[]},{"level":2,"title":"Challenge","slug":"challenge","link":"#challenge","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.01,"words":604},"filePathRelative":"hackingwithswift.com/read/30/07-wrap-up.md","excerpt":"\\n"}');export{O as comp,V as data};
