import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as s,t as r,e as n,n as t,g as e,d,f as p,r as o,o as k}from"./app-BgNevrm5.js";const m={},h={id:"frontmatter-title-관련",tabindex:"-1"},v={class:"header-anchor",href:"#frontmatter-title-관련"},w=s("nav",{class:"table-of-contents"},[s("ul")],-1),g=s("hr",null,null,-1),f=p(`<blockquote><p>Updated for Xcode 15</p></blockquote><p><strong>New in iOS 16</strong></p><p>SwiftUI&#39;s <code>PhotosPicker</code> allows users to select videos and bring them into our app, but in my experience it needs to be used in a fairly precise way to avoid problems.</p><p>I&#39;ll show you the code first, then explain why it takes as much work as it does:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token class-name">AVKit</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token class-name">PhotosUI</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token class-name">SwiftUI</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">Movie</span><span class="token punctuation">:</span> <span class="token class-name">Transferable</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">var</span> transferRepresentation<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">TransferRepresentation</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">FileRepresentation</span><span class="token punctuation">(</span>contentType<span class="token punctuation">:</span> <span class="token punctuation">.</span>movie<span class="token punctuation">)</span> <span class="token punctuation">{</span> movie <span class="token keyword">in</span></span>
<span class="line">            <span class="token class-name">SentTransferredFile</span><span class="token punctuation">(</span>movie<span class="token punctuation">.</span>url<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> importing<span class="token punctuation">:</span> <span class="token punctuation">{</span> received <span class="token keyword">in</span></span>
<span class="line">            <span class="token keyword">let</span> copy <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span>documentsDirectory<span class="token punctuation">.</span><span class="token function">appending</span><span class="token punctuation">(</span>path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;movie.mp4&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">if</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">fileExists</span><span class="token punctuation">(</span>atPath<span class="token punctuation">:</span> copy<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">try</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> copy<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">try</span> <span class="token class-name">FileManager</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">.</span><span class="token function">copyItem</span><span class="token punctuation">(</span>at<span class="token punctuation">:</span> received<span class="token punctuation">.</span>file<span class="token punctuation">,</span> to<span class="token punctuation">:</span> copy<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">Self</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> copy<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">enum</span> <span class="token class-name">LoadState</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> unknown<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> <span class="token function">loaded</span><span class="token punctuation">(</span><span class="token class-name">Movie</span><span class="token punctuation">)</span><span class="token punctuation">,</span> failed</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> selectedItem<span class="token punctuation">:</span> <span class="token class-name">PhotosPickerItem</span><span class="token operator">?</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> loadState <span class="token operator">=</span> <span class="token class-name">LoadState</span><span class="token punctuation">.</span>unknown</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">PhotosPicker</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Select movie&quot;</span></span><span class="token punctuation">,</span> selection<span class="token punctuation">:</span> $selectedItem<span class="token punctuation">,</span> matching<span class="token punctuation">:</span> <span class="token punctuation">.</span>videos<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">switch</span> loadState <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token punctuation">.</span>unknown<span class="token punctuation">:</span></span>
<span class="line">                <span class="token class-name">EmptyView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token punctuation">.</span>loading<span class="token punctuation">:</span></span>
<span class="line">                <span class="token class-name">ProgressView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token punctuation">.</span><span class="token function">loaded</span><span class="token punctuation">(</span><span class="token keyword">let</span> movie<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                <span class="token class-name">VideoPlayer</span><span class="token punctuation">(</span>player<span class="token punctuation">:</span> <span class="token class-name">AVPlayer</span><span class="token punctuation">(</span>url<span class="token punctuation">:</span> movie<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">.</span><span class="token function">scaledToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token punctuation">.</span>failed<span class="token punctuation">:</span></span>
<span class="line">                <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Import failed&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> selectedItem<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span></span>
<span class="line">            <span class="token class-name">Task</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">                    loadState <span class="token operator">=</span> <span class="token punctuation">.</span>loading</span>
<span class="line"></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token keyword">let</span> movie <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token keyword">await</span> selectedItem<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">loadTransferable</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token class-name">Movie</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        loadState <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token function">loaded</span><span class="token punctuation">(</span>movie<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                        loadState <span class="token operator">=</span> <span class="token punctuation">.</span>failed</span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">                    loadState <span class="token operator">=</span> <span class="token punctuation">.</span>failed</span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b={href:"https://hackingwithswift.com/files/projects/swiftui/how-to-let-users-import-videos-using-photospicker-1.zip",target:"_blank",rel:"noopener noreferrer"},y=p("<p>Yes, that&#39;s a lot, so let me break it down.</p><p>First, we need to import <code>AVKit</code> in order to have access to the <code>VideoPlayer</code> view, and we need <code>PhotosUI</code> to have access to the <code>PhotosPicker</code> view.</p><p>Second, the custom <code>Movie</code> struct is how we tell SwiftUI to import movie data. It can send data using <code>Transferable</code> by converting its URL into a <code>SentTransferredFile</code>, which means we can drag <code>Movie</code> instances out of an app, for example. It can also <em>receive</em> data using the <code>importing</code> closure: it copies the movie URL to our documents directory as “movie.mp4”, removing any existing file.</p><p>Third, importing a movie can take some time, so we need to make sure the user has some idea of our import state while the app runs. This is handled through an enum with four cases: <code>unknown</code> when the app starts, <code>loading</code> to show a progress spinner, <code>loaded</code> when we have a finished <code>Movie</code> to work with, and <code>failed</code> when the import <code>failed</code> for some reason.</p><p>Finally, in the <code>onChange()</code> modifier we ask the system to give us a <code>Movie</code> instance so we accept the URL and move it into the correct location for our app to use. This also takes care of setting the <code>loadState</code> property so our UI stays in sync.</p><p>Hopefully Apple can find a way to simplify this API in the future, but until then I&#39;d certainly be keen to hear suggestions to make this code simpler!</p>",6),P={class:"hint-container details"},_=s("summary",null,"Similar solutions…",-1);function S(i,I){const a=o("VPCard"),c=o("FontIcon");return k(),u("div",null,[s("h1",h,[s("a",v,[s("span",null,r(i.$frontmatter.title)+" 관련",1)])]),n(a,t(e({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,g,n(a,t(e({title:"How to let users import videos using PhotosPicker | SwiftUI by Example",desc:"How to let users import videos using PhotosPicker",link:"https://hackingwithswift.com/quick-start/swiftui/how-to-let-users-import-videos-using-photospicker",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,s("blockquote",null,[s("p",null,[s("a",b,[n(c,{icon:"fas fa-file-zipper"}),d("Download this as an Xcode project")])])]),y,s("details",P,[_,n(a,t(e({title:"Article(s) > How to let users select pictures using PhotosPicker",desc:"How to let users select pictures using PhotosPicker",link:"/hackingwithswift.com/swiftui/how-to-let-users-select-pictures-using-photospicker.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to let users share content using the system share sheet | SwiftUI by Example",desc:"How to let users share content using the system share sheet",link:"/hackingwithswift.com/swiftui/how-to-let-users-share-content-using-the-system-share-sheet.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to let users delete rows from a list | SwiftUI by Example",desc:"How to let users delete rows from a list",link:"/hackingwithswift.com/swiftui/how-to-let-users-delete-rows-from-a-list.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to let users pick options from a menu | SwiftUI by Example",desc:"How to let users pick options from a menu",link:"/hackingwithswift.com/swiftui/how-to-let-users-pick-options-from-a-menu.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),n(a,t(e({title:"How to let users find and replace text | SwiftUI by Example",desc:"How to let users find and replace text",link:"/hackingwithswift.com/swiftui/how-to-let-users-find-and-replace-text.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const U=l(m,[["render",S],["__file","how-to-let-users-import-videos-using-photospicker.html.vue"]]),V=JSON.parse('{"path":"/hackingwithswift.com/swiftui/how-to-let-users-import-videos-using-photospicker.html","title":"How to let users import videos using PhotosPicker","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to let users import videos using PhotosPicker","description":"Article(s) > How to let users import videos using PhotosPicker","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to let users import videos using PhotosPicker"},{"property":"og:description","content":"How to let users import videos using PhotosPicker"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-let-users-import-videos-using-photospicker.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/how-to-let-users-import-videos-using-photospicker.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to let users import videos using PhotosPicker"}],["meta",{"property":"og:description","content":"Article(s) > How to let users import videos using PhotosPicker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to let users import videos using PhotosPicker\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.76,"words":827},"filePathRelative":"hackingwithswift.com/swiftui/how-to-let-users-import-videos-using-photospicker.md","excerpt":"\\n"}');export{U as comp,V as data};
