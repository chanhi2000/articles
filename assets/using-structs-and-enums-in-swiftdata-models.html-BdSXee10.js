import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as s,t as l,e as t,n,g as e,f as p,r,o as d}from"./app-BgNevrm5.js";const u={},m={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},g=s("nav",{class:"table-of-contents"},[s("ul")],-1),f=s("hr",null,null,-1),k=p(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>Any class marked with <code>@Model</code> can be used with SwiftData immediately, but you can also use any struct or enum as long as they conform to the <code>Codable</code> protocol. This works even if the enums have raw or associated values.</p><div class="hint-container important"><p class="hint-container-title">Important</p><p>Just because you can use them, it doesn’t mean you should. Please read this page fully before coming to a conclusion.</p></div><p>There are a couple of things you should be aware of when doing this, but first let’s look at a practical example. If you wanted to store a <code>User</code> record that has a <code>status</code> enum attached to it, you might write this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">enum</span> <span class="token class-name">Status</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> active</span>
<span class="line">    <span class="token keyword">case</span> <span class="token function">inactive</span><span class="token punctuation">(</span>reason<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token attribute atrule">@Model</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">var</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span></span>
<span class="line">    <span class="token keyword">var</span> status<span class="token punctuation">:</span> <span class="token class-name">Status</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> status<span class="token punctuation">:</span> <span class="token class-name">Status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>status <span class="token operator">=</span> status</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SwiftData will store the whole enum case, along with the <code>reason</code> string attached to it.</p><p>Internally something interesting happens: SwiftData flattens the enum and its associated value directly into the database record for the <code>User</code>, rather than spinning it off into a separate table. This makes sense if you think about it: value types like structs and enums naturally only have a single owner, so there’s no need to create a relationship.</p><p>So, value-type properties become attributes in your underlying storage immediately. This works for all basic value types (<code>Int</code>, <code>String</code>, etc), but you can also also use structs, enums, <code>Codable</code> data, and collections of value types.</p><p>However, there is a catch: if you use collections of value types, e.g. <code>[String]</code>, SwiftData will save <em>that</em> directly inside a single property too. Right now it’s encoded as binary property list data, which means you can’t use the contents of your array in a predicate.</p><p><strong>If you attempt to do so, your app will just crash at runtime.</strong> So, please be very careful.</p><p>Of course, this behavior is an implementation detail of SwiftData, and is subject to change at any point in the future – do try it yourself before coming to a final conclusion.</p>`,11);function w(o,y){const a=r("VPCard");return d(),c("div",null,[s("h1",m,[s("a",h,[s("span",null,l(o.$frontmatter.title)+" 관련",1)])]),t(a,n(e({title:"SwiftData by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftdata/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,f,t(a,n(e({title:"Using structs and enums in SwiftData models | SwiftData by Example",desc:"Using structs and enums in SwiftData models",link:"https://hackingwithswift.com/quick-start/swiftdata/using-structs-and-enums-in-swiftdata-models",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),k])}const S=i(u,[["render",w],["__file","using-structs-and-enums-in-swiftdata-models.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/swiftdata/using-structs-and-enums-in-swiftdata-models.html","title":"Using structs and enums in SwiftData models","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Using structs and enums in SwiftData models","description":"Article(s) > Using structs and enums in SwiftData models","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftdata","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Using structs and enums in SwiftData models"},{"property":"og:description","content":"Using structs and enums in SwiftData models"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftdata/using-structs-and-enums-in-swiftdata-models.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftdata/using-structs-and-enums-in-swiftdata-models.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Using structs and enums in SwiftData models"}],["meta",{"property":"og:description","content":"Article(s) > Using structs and enums in SwiftData models"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftdata"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2023-10-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Using structs and enums in SwiftData models\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2023-10-12T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"hackingwithswift.com/swiftdata/using-structs-and-enums-in-swiftdata-models.md","localizedDate":"2023년 10월 12일","excerpt":"\\n"}');export{S as comp,_ as data};
