import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as e,t as u,e as n,n as o,g as i,d as t,f as l,r,o as h}from"./app-BgNevrm5.js";const m={},g={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},k=e("nav",{class:"table-of-contents"},[e("ul")],-1),f=e("hr",null,null,-1),v=e("p",null,"A Core Data model defines what your data should look like, but it doesn't actually store the real data anywhere. To make our app work, we need to load that model, create a real working database from it, load that database, then prepare what’s called a “managed object context” – an environment where we can create, read, update, and delete Core Data objects entirely in memory, before writing back to the database in one lump.",-1),b=e("p",null,[t("This all used to be a massive amount of work, to the point where it would put people off Core Data for life. But from iOS 10 onwards, Apple rolled all this work up into a single new class called "),e("code",null,"NSPersistentContainer"),t(". This has removed almost all the tedium from setting up Core Data, and you can now get up and running in just a few lines of code.")],-1),y=e("p",null,[t("So, in this second step we're going to write code to load the model we just defined, load a persistent store where saved objects can be stored, and also create a managed object context where our objects will live while they are active – all using the new "),e("code",null,"NSPersistentContainer"),t(" class. Once it finishes its work, we’ll have a managed object context ready to work with, and any changes we make to Core Data objects won't be saved until we explicitly request it. It is significantly faster to manipulate objects inside your managed object context as much as you need to before saving rather than saving after every change.")],-1),C=e("p",null,"When data is saved, it's nearly always written out to an SQLite database. There are other options, but take my word for it: almost everyone uses SQLite. SQLite is a very small, very fast, and very portable database engine, and what Core Data does is provide a wrapper around it: when you read, write and query a managed object context, Core Data translates that into Structured Query Language (SQL) for SQLite to parse.",-1),S=e("p",null,[t('If you were wondering, SQL is pronounced Ess Cue Ell, but many people pronounce it "sequel." The pronunciation of SQLite is more varied, but when I met its author I asked him how '),e("em",null,"he"),t(" pronounces it, so I feel fairly safe that the definitive answer is this: you pronounce SQLite as Ess-Cue-Ell-ite, as if it were a mineral like Kryponite or Carbonite depending on your preferred movie. Unless you plan to get into more advanced usage, you don’t need to know anything about SQLite to use Core Data.")],-1),_=e("code",null,"ViewController.swift",-1),j=l(`<div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">CoreData</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>We’re going to create the <code>NSPersistentContainer</code> as a property, so we can load it once and share it elsewhere in our app. So, add this property now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">var</span> container<span class="token punctuation">:</span> <span class="token class-name">NSPersistentContainer</span><span class="token operator">!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>To set up the basic Core Data system, we need to write code that will do the following:</p>`,4),x=e("li",null,[t("Load our data model we just created from the application bundle and create a "),e("code",null,"NSManagedObjectModel"),t(" object from it.")],-1),P=e("li",null,[t("Create an "),e("code",null,"NSPersistentStoreCoordinator"),t(" object, which is responsible for reading from and writing to disk.")],-1),D=e("code",null,"URL",-1),N=e("code",null,"Project38.sqlite",-1),A=e("li",null,[t("Load that database into the "),e("code",null,"NSPersistentStoreCoordinator"),t(" so it knows where we want it to save. If it doesn't exist, it will be created automatically")],-1),L=e("li",null,[t("Create an "),e("code",null,"NSManagedObjectContext"),t(" and point it at the persistent store coordinator.")],-1),T=l(`<p>Beautifully, brilliantly, all five of those steps are exactly what <code>NSPersistentContainer</code> does for us. So what used to be 15 to 20 lines of code is now summed up in just six – add this to <code>viewDidLoad()</code> now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">container <span class="token operator">=</span> <span class="token class-name">NSPersistentContainer</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Project38&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">container<span class="token punctuation">.</span>loadPersistentStores <span class="token punctuation">{</span> storeDescription<span class="token punctuation">,</span> error <span class="token keyword">in</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">let</span> error <span class="token operator">=</span> error <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Unresolved error </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">error</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The first line creates the persistent container, and must be given the name of the Core Data model file we created earlier: “Project38”. The next line calls the <code>loadPersistentStores()</code> method, which loads the saved database if it exists, or creates it otherwise. If any errors come back here you’ll know something has gone fatally wrong, but if it succeeds then you can be guaranteed the data has loaded and you’re ready to continue.</p><p>There’s one small thing we do still need to do ourselves, and that’s to write a small method to save any changes from memory back to the database on disk. The persistent container gives us a property called <code>viewContext</code>, which is a managed object context: an environment where we can manipulate Core Data objects entirely in RAM.</p><p>Once you’ve finished your changes and want to write them permanently – i.e., save them to disk – you need to call the <code>save()</code> method on the <code>viewContext</code> property. However, this should only be done if there are any changes since the last save – there’s no point doing unnecessary work. So, before calling <code>save()</code> you should read the <code>hasChanges</code> property. We’re going to wrap this all up in a single method called <code>saveContext()</code> – add this new method just after <code>viewDidLoad()</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">saveContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> container<span class="token punctuation">.</span>viewContext<span class="token punctuation">.</span>hasChanges <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">try</span> container<span class="token punctuation">.</span>viewContext<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;An error occurred while saving: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">error</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We&#39;ll be calling that whenever we&#39;ve made changes that should be saved to disk.</p><p>At this point, our app has a working data model as well as code to load it into a managed object context for reading and writing. That means step two is done and we&#39;re on to step three: creating objects inside Core Data and fetching data from GitHub.</p>`,8);function O(c,q){const a=r("VPCard"),s=r("FontIcon");return h(),d("div",null,[e("h1",g,[e("a",w,[e("span",null,u(c.$frontmatter.title)+" 관련",1)])]),n(a,o(i({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),k,f,n(a,o(i({title:"Adding Core Data to our project: NSPersistentContainer | Hacking with iOS",desc:"Adding Core Data to our project: NSPersistentContainer",link:"https://hackingwithswift.com/read/38/3/adding-core-data-to-our-project-nspersistentcontainer",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),v,b,y,C,S,e("p",null,[t("To get started, open "),n(s,{icon:"fa-brands fa-swift"}),_,t(" and add an import for Core Data:")]),j,e("ol",null,[x,P,e("li",null,[t("Set up a "),D,t(" pointing to the database on disk where our actual saved objects live. This will be an SQLite database named "),n(s,{icon:"iconfont icon-sqlite"}),N,t(".")]),A,L]),T])}const R=p(m,[["render",O],["__file","03-adding-core-data-to-our-project-nspersistentcontainer.html.vue"]]),E=JSON.parse('{"path":"/hackingwithswift.com/read/38/03-adding-core-data-to-our-project-nspersistentcontainer.html","title":"Adding Core Data to our project: NSPersistentContainer","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Adding Core Data to our project: NSPersistentContainer","description":"Article(s) > Adding Core Data to our project: NSPersistentContainer","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Adding Core Data to our project: NSPersistentContainer"},{"property":"og:description","content":"Adding Core Data to our project: NSPersistentContainer"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/38/03-adding-core-data-to-our-project-nspersistentcontainer.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/38/03-adding-core-data-to-our-project-nspersistentcontainer.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Adding Core Data to our project: NSPersistentContainer"}],["meta",{"property":"og:description","content":"Article(s) > Adding Core Data to our project: NSPersistentContainer"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Adding Core Data to our project: NSPersistentContainer\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.69,"words":1107},"filePathRelative":"hackingwithswift.com/read/38/03-adding-core-data-to-our-project-nspersistentcontainer.md","excerpt":"\\n"}');export{R as comp,E as data};
