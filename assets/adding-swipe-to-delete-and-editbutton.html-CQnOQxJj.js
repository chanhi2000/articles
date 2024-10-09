import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as a,t as c,e as n,n as e,g as s,f as p,r as d,o as r}from"./app-BgNevrm5.js";const u={},m={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},w=a("nav",{class:"table-of-contents"},[a("ul")],-1),g=a("hr",null,null,-1),f=p(`<blockquote><p>Updated for Xcode 16</p></blockquote><p>Before we&#39;re done with this app, let&#39;s make a handful of smaller changes that help polish up what we have.</p><p>First, what happens if the user looks at their order and decides against one of the items? Right now we can <em>add</em> items but can&#39;t <em>delete</em> them, but this isn&#39;t too hard to remedy.</p><p>Just like UIKit, SwiftUI&#39;s <code>List</code> view can be manipulated using <code>IndexSet</code> – a collection of locations in its data. So, we can add a method to <code>OrderView</code> that accepts an <code>IndexSet</code> and uses it to delete those items from our order array:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token function-definition function">deleteItems</span><span class="token punctuation">(</span>at offsets<span class="token punctuation">:</span> <span class="token class-name">IndexSet</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    order<span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>atOffsets<span class="token punctuation">:</span> offsets<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To connect that to SwiftUI, we need to add an <code>onDelete()</code> modifier to the <code>ForEach</code> that shows the menu items in the order. This accepts a closure that will be executed when deletion happens, and that closure must accept an <code>IndexSet</code> and delete those items – basically exactly what our <code>deleteItems(at:)</code> method already does.</p><p>Modify the first section in the <code>OrderView</code> form to this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Section</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">ForEach</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span></span>
<span class="line">        <span class="token class-name">HStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span></span>
<span class="line">            <span class="token class-name">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;$</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">item<span class="token punctuation">.</span>price</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">onDelete</span><span class="token punctuation">(</span>perform<span class="token punctuation">:</span> deleteItems<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the user wants to remove several items at a time, that&#39;s also easy to do in SwiftUI. We just added the method to handle deletion, so now we can add an edit button to the navigation bar and let SwiftUI handle the rest. No, really!</p><p>Add this after the <code>navigationTitle()</code> modifier in <code>OrderView</code>:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">EditButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SwiftUI already knows that an edit button should toggle the table between editing and non-editing mode, while also changing title between Edit and Done – another example of us getting the system default behavior for free.</p><p>Let&#39;s move on to a second upgrade: why do we let users press the Place Order button if they haven&#39;t added anything to their order? This doesn&#39;t make sense, and we shouldn&#39;t really allow it. So, let&#39;s <em>not</em> allow it!</p><p>Here&#39;s how that part of <code>OrderView</code> looks right now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Section</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Place Order&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">CheckoutView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>What we want is to disable that when there are no items in our order. Well, thanks to the power of SwiftUI we can do exactly that with the <code>disabled()</code> modifier, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">Section</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Place Order&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">CheckoutView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span>items<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you run the app now you&#39;ll find that you can add an item, go to the order screen, and <em>delete</em> that item, and Place Order will automatically become disabled as your cart becomes empty.</p><p>Much better!</p>`,19),k={class:"hint-container details"},b=a("summary",null,"Further Reading…",-1),v={class:"hint-container details"},y=a("summary",null,"Similar solutions…",-1);function S(i,x){const t=d("VPCard");return r(),l("div",null,[a("h1",m,[a("a",h,[a("span",null,c(i.$frontmatter.title)+" 관련",1)])]),n(t,e(s({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,g,n(t,e(s({title:"Adding swipe to delete and EditButton | SwiftUI by Example",desc:"Adding swipe to delete and EditButton",link:"https://hackingwithswift.com/quick-start/swiftui/adding-swipe-to-delete-and-editbutton",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,a("details",k,[b,n(t,e(s({title:"How to let users delete rows from a list | SwiftUI by Example",desc:"How to let users delete rows from a list",link:"/hackingwithswift.com/swiftui/how-to-let-users-delete-rows-from-a-list.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,e(s({title:"How to enable editing on a list using EditButton | SwiftUI by Example",desc:"How to enable editing on a list using EditButton",link:"/hackingwithswift.com/swiftui/how-to-enable-editing-on-a-list-using-editbutton.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,e(s({title:"Enabling and disabling elements in forms | SwiftUI by Example",desc:"Enabling and disabling elements in forms",link:"/hackingwithswift.com/swiftui/enabling-and-disabling-elements-in-forms.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)]),a("details",v,[y,n(t,e(s({title:"How to enable editing on a list using EditButton | SwiftUI by Example",desc:"How to enable editing on a list using EditButton",link:"/hackingwithswift.com/swiftui/how-to-enable-editing-on-a-list-using-editbutton.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,e(s({title:"All SwiftUI property wrappers explained and compared | SwiftUI by Example",desc:"All SwiftUI property wrappers explained and compared",link:"/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,e(s({title:"SwiftUI tips and tricks | SwiftUI by Example",desc:"SwiftUI tips and tricks",link:"/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,e(s({title:"How to let users delete rows from a list | SwiftUI by Example",desc:"How to let users delete rows from a list",link:"/hackingwithswift.com/swiftui/how-to-let-users-delete-rows-from-a-list.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(t,e(s({title:"How to delete Core Data objects from SwiftUI views | SwiftUI by Example",desc:"How to delete Core Data objects from SwiftUI views",link:"/hackingwithswift.com/swiftui/how-to-delete-core-data-objects-from-swiftui-views.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const _=o(u,[["render",S],["__file","adding-swipe-to-delete-and-editbutton.html.vue"]]),U=JSON.parse('{"path":"/hackingwithswift.com/swiftui/adding-swipe-to-delete-and-editbutton.html","title":"Adding swipe to delete and EditButton","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Adding swipe to delete and EditButton","description":"Article(s) > Adding swipe to delete and EditButton","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Adding swipe to delete and EditButton"},{"property":"og:description","content":"Adding swipe to delete and EditButton"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/adding-swipe-to-delete-and-editbutton.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/adding-swipe-to-delete-and-editbutton.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Adding swipe to delete and EditButton"}],["meta",{"property":"og:description","content":"Article(s) > Adding swipe to delete and EditButton"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2024-04-30T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Adding swipe to delete and EditButton\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-30T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2024-04-30T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.96,"words":887},"filePathRelative":"hackingwithswift.com/swiftui/adding-swipe-to-delete-and-editbutton.md","localizedDate":"2024년 4월 30일","excerpt":"\\n"}');export{_ as comp,U as data};
