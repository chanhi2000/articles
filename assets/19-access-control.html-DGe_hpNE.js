import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as t,t as p,e,n as s,g as a,f as h,r as n,o as d}from"./app-BgNevrm5.js";const m={},g={id:"frontmatter-title-관련",tabindex:"-1"},u={class:"header-anchor",href:"#frontmatter-title-관련"},f=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),y=h(`<p>Access control lets you specify what data inside structs and classes should be exposed to the outside world, and you get to choose four modifiers:</p><ul><li>Public: this means everyone can read and write the property.</li><li>Internal: this means only your Swift code can read and write the property. If you ship your code as a framework for others to use, they won’t be able to read the property.</li><li>File Private: this means that only Swift code in the same file as the type can read and write the property.</li><li>Private: this is the most restrictive option, and means the property is available only inside methods that belong to the type, or its extensions.</li></ul><p>Most of the time you don&#39;t need to specify access control, but sometimes you&#39;ll want to explicitly set a property to be private because it stops others from accessing it directly. This is useful because your own methods can work with that property, but others can&#39;t, thus forcing them to go through your code to perform certain actions.</p><p>To declare a property private, just do this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">TaylorFan</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://hackingwithswift.com/img/books/hws/access-control-1@2x.png" alt="Trying to set a private property results in a compiler error." tabindex="0" loading="lazy"><figcaption>Trying to set a private property results in a compiler error.</figcaption></figure><p>If you want to use “file private” access control, just write it as one word like so: <code>fileprivate</code>.</p>`,7);function k(i,b){const o=n("VPCard"),c=n("VidStack");return d(),l("div",null,[t("h1",g,[t("a",u,[t("span",null,p(i.$frontmatter.title)+" 관련",1)])]),e(o,s(a({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),f,w,e(o,s(a({title:"Access control | Hacking with iOS",desc:"Access control",link:"https://hackingwithswift.com/read/0/19/access-control",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),e(c,{src:"youtube/SVXtWw63C8k"}),y])}const A=r(m,[["render",k],["__file","19-access-control.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/read/00/19-access-control.html","title":"Access control","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Access control","description":"Article(s) > Access control","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Access control"},{"property":"og:description","content":"Access control"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/00/19-access-control.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/00/19-access-control.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Access control"}],["meta",{"property":"og:description","content":"Article(s) > Access control"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/hws/access-control-1@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Access control\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/hws/access-control-1@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"hackingwithswift.com/read/00/19-access-control.md","excerpt":"\\n"}');export{A as comp,S as data};
