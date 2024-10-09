import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as s,t as u,e as n,n as t,g as e,f as r,r as o,o as d}from"./app-BgNevrm5.js";const m={},k={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},h=s("nav",{class:"table-of-contents"},[s("ul")],-1),g=s("hr",null,null,-1),f=r(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>SwiftUI comes with support for document-based apps, which are apps that let users create, edit, and share documents such as text files. In SwiftUI we’re given two main types to work with: the <code>FileDocument</code> protocol to define what a document in our app looks like, and the <code>DocumentGroup</code> struct that gives us a default scene to let users create, open, and save documents.</p><p>Creating your own document-based app takes four steps:</p><ol><li>Defining what your document is, including how it should be saved and loaded.</li><li>Creating some sort of view that lets users edit their documents.</li><li>Creating a <code>DocumentGroup</code> capable of creating your files and loading them into your user interface.</li><li>Updating your Info.plist file to say that you want to use the system’s document browser.</li></ol><p>We’ll work through each of those here, starting with defining what your document is. Some document types save multiple files of different types, but for now we’re going to say that we support only plain text, and we want that text to be read and written directly to disk.</p><p>First, add <code>import UniformTypeIdentifiers</code> to the top of your Swift file, so you can bring in uniform type identifiers – a fixed way of saying what data types your document can work with.</p><p>Now add this struct, defining a simple text file:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">TextFile</span><span class="token punctuation">:</span> <span class="token class-name">FileDocument</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// tell the system we support only plain text</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">var</span> readableContentTypes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">UTType</span><span class="token punctuation">.</span>plainText<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// by default our document is empty</span></span>
<span class="line">    <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// a simple initializer that creates new, empty documents</span></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>initialText<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        text <span class="token operator">=</span> initialText</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// this initializer loads data that has been saved previously</span></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>configuration<span class="token punctuation">:</span> <span class="token class-name">ReadConfiguration</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token keyword">let</span> data <span class="token operator">=</span> configuration<span class="token punctuation">.</span>file<span class="token punctuation">.</span>regularFileContents <span class="token punctuation">{</span></span>
<span class="line">            text <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">(</span>decoding<span class="token punctuation">:</span> data<span class="token punctuation">,</span> <span class="token keyword">as</span><span class="token punctuation">:</span> UTF8<span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token class-name">CocoaError</span><span class="token punctuation">(</span><span class="token punctuation">.</span>fileReadCorruptFile<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// this will be called when the system wants to write our data to disk</span></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">fileWrapper</span><span class="token punctuation">(</span>configuration<span class="token punctuation">:</span> <span class="token class-name">WriteConfiguration</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-&gt;</span> <span class="token class-name">FileWrapper</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token class-name">Data</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span>utf8<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token class-name">FileWrapper</span><span class="token punctuation">(</span>regularFileWithContents<span class="token punctuation">:</span> data<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice how in the <code>fileWrapper(configuration:)</code> method we convert our text string into a <code>Data</code> instance, then save that using a <code>FileWrapper</code>. It’s not our job to say where the file should be stored – iOS takes care of that for us.</p><p>Our second task is to create some sort of editor area where the user can edit our text. This should use an <code>@Binding</code> property wrapper so that it updates the text in our <code>TextFile</code> struct rather than keeping its own local copy:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@Binding</span> <span class="token keyword">var</span> document<span class="token punctuation">:</span> <span class="token class-name">TextFile</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">TextEditor</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> $document<span class="token punctuation">.</span>text<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Our third step is to edit the main Swift file for the project to include a <code>DocumentGroup</code>, which presents the system-standard interface for browsing, opening, and creating files:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@main</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">YourAwesomeApp</span><span class="token punctuation">:</span> <span class="token class-name">App</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">Scene</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">DocumentGroup</span><span class="token punctuation">(</span>newDocument<span class="token punctuation">:</span> <span class="token class-name">TextFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> file <span class="token keyword">in</span></span>
<span class="line">            <span class="token class-name">ContentView</span><span class="token punctuation">(</span>document<span class="token punctuation">:</span> file<span class="token punctuation">.</span>$document<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, that tells iOS how to create new files, and also how to show them.</p><p>Finally, we need to add a new key to Info.plist, so open that now, right-click in some space, and choose Add Row. For the key name enter “Supports Document Browser”, make sure Type is set to Boolean, then set the value to YES.</p><figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup-1~dark@2x.png" alt="The Info.plist file with “Supports Document Browser” set to YES." tabindex="0" loading="lazy"><figcaption>The Info.plist file with “Supports Document Browser” set to YES.</figcaption></figure><p>That’s it! Your document-based app is ready to go. If you run your app back now you’ll see the standard iOS document picker interface, and if you press + iOS will create a new file and open it for editing in <code>ContentView</code> – nice!</p>`,17),b={class:"hint-container details"},v=s("summary",null,"Similar solutions…",-1);function y(i,x){const a=o("VPCard"),p=o("VidStack");return d(),l("div",null,[s("h1",k,[s("a",w,[s("span",null,u(i.$frontmatter.title)+" 관련",1)])]),n(a,t(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),h,g,n(a,t(e({title:"How to create a document-based app using FileDocument and DocumentGroup | SwiftUI by Example",desc:"How to create a document-based app using FileDocument and DocumentGroup",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,n(p,{src:"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup-2~dark.mp4"}),s("details",b,[v,n(a,t(e({title:"All SwiftUI property wrappers explained and compared | SwiftUI by Example",desc:"All SwiftUI property wrappers explained and compared",link:"/hackingwithswift.com/swiftui/all-swiftui-property-wrappers-explained-and-compared.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"SwiftUI tips and tricks | SwiftUI by Example",desc:"SwiftUI tips and tricks",link:"/hackingwithswift.com/swiftui/swiftui-tips-and-tricks.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to use Instruments to profile your SwiftUI code and identify slow layouts | SwiftUI by Example",desc:"How to use Instruments to profile your SwiftUI code and identify slow layouts",link:"/hackingwithswift.com/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"Building a menu using List | SwiftUI by Example",desc:"Building a menu using List",link:"/hackingwithswift.com/swiftui/building-a-menu-using-list.html",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to create multi-column lists using Table | SwiftUI by Example",desc:"How to create multi-column lists using Table",link:"/hackingwithswift.com/swiftui/how-to-create-multi-column-lists-using-table.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const _=c(m,[["render",y],["__file","how-to-create-a-document-based-app-using-filedocument-and-documentgroup.html.vue"]]),F=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.html","title":"How to create a document-based app using FileDocument and DocumentGroup","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to create a document-based app using FileDocument and DocumentGroup","description":"Article(s) > How to create a document-based app using FileDocument and DocumentGroup","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to create a document-based app using FileDocument and DocumentGroup"},{"property":"og:description","content":"How to create a document-based app using FileDocument and DocumentGroup"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to create a document-based app using FileDocument and DocumentGroup"}],["meta",{"property":"og:description","content":"Article(s) > How to create a document-based app using FileDocument and DocumentGroup"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup-1~dark@2x.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to create a document-based app using FileDocument and DocumentGroup\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup-1~dark@2x.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.3,"words":989},"filePathRelative":"hackingwithswift.com/swiftui/how-to-create-a-document-based-app-using-filedocument-and-documentgroup.md","excerpt":"\\n"}');export{_ as comp,F as data};
