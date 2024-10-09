import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as n,t as l,e as a,n as t,g as e,f as c,r as u,o as r}from"./app-BgNevrm5.js";const d={},k={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},v=n("nav",{class:"table-of-contents"},[n("ul")],-1),w=n("hr",null,null,-1),h=c(`<blockquote><p>Updated for Xcode 15</p></blockquote><p>SwiftData and SwiftUI perform best when tightly integrated, and when you separate them – when you want to introduce view models into your code you lose a fair amount of their power. However, with some extra work MVVM can be used just fine with SwiftUI and SwiftData, as long as you&#39;re careful to keep your data synchronized.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If you used Core Data previously you&#39;ll know that <code>NSFetchedResultsController</code> allowed us to execute a query and monitor it for changes. We don&#39;t have an equivalent in SwiftData, so you need to keep your data model updated by hand.</p></div><p>Regardless of whether you use MVVM or not, your underlying SwiftData models are the same. For this example, we&#39;ll use this simple <code>Movie</code> model:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@Model</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Movie</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span></span>
<span class="line">    <span class="token keyword">var</span> cast<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> cast<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title</span>
<span class="line">        <span class="token keyword">self</span><span class="token punctuation">.</span>cast <span class="token operator">=</span> cast</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To demonstrate MVVM, let&#39;s first look at the non-MVVM approach where SwiftUI and SwiftData are tied closely using <code>@Query</code> and the environment. This means our layout and data are both handled directly in the SwiftUI view, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@Query</span><span class="token punctuation">(</span>sort<span class="token punctuation">:</span> <span class="token punctuation">\\</span><span class="token class-name">Movie</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token keyword">var</span> movies<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Movie</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token attribute atrule">@Environment</span><span class="token punctuation">(</span><span class="token punctuation">\\</span><span class="token punctuation">.</span>modelContext<span class="token punctuation">)</span> <span class="token keyword">var</span> modelContext</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">List</span><span class="token punctuation">(</span>movies<span class="token punctuation">)</span> <span class="token punctuation">{</span> movie <span class="token keyword">in</span></span>
<span class="line">                <span class="token class-name">VStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">Text</span><span class="token punctuation">(</span>movie<span class="token punctuation">.</span>title<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>headline<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                    <span class="token class-name">Text</span><span class="token punctuation">(</span>movie<span class="token punctuation">.</span>cast<span class="token punctuation">.</span><span class="token function">formatted</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>and<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">navigationTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;MovieDB&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Add Sample&quot;</span></span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> addSample<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">func</span> <span class="token function-definition function">addSample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> movie <span class="token operator">=</span> <span class="token class-name">Movie</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Avatar&quot;</span></span><span class="token punctuation">,</span> cast<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Sam Worthington&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Zoe Saldaña&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Stephen Lang&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michelle Rodriguez&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        modelContext<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>movie<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This suffers from the same problem you&#39;ll have seen outside of SwiftData – it&#39;s hard to write unit tests for this, because the query requires SwiftUI to be actively involved.</p><p>To move this over to MVVM we need to create a new view model class using the <code>@Observable</code> macro. This needs to be able to perform a SwiftData fetch when it loads, but also to repeat that fetch in the future when the data changes.</p><div class="hint-container important"><p class="hint-container-title">Important</p><p>The <code>@Query</code> macro works only when it can access the SwiftUI environment, which makes it incompatible with MVVM.</p></div><p>So, we might make something like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">extension</span> <span class="token class-name">ContentView</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@Observable</span></span>
<span class="line">    <span class="token keyword">class</span> <span class="token class-name">ViewModel</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> modelContext<span class="token punctuation">:</span> <span class="token class-name">ModelContext</span></span>
<span class="line">        <span class="token keyword">var</span> movies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Movie</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">init</span><span class="token punctuation">(</span>modelContext<span class="token punctuation">:</span> <span class="token class-name">ModelContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">self</span><span class="token punctuation">.</span>modelContext <span class="token operator">=</span> modelContext</span>
<span class="line">            <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">func</span> <span class="token function-definition function">addSample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> movie <span class="token operator">=</span> <span class="token class-name">Movie</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;Avatar&quot;</span></span><span class="token punctuation">,</span> cast<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Sam Worthington&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Zoe Saldaña&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Stephen Lang&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Michelle Rodriguez&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            modelContext<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>movie<span class="token punctuation">)</span></span>
<span class="line">            <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">func</span> <span class="token function-definition function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">let</span> descriptor <span class="token operator">=</span> <span class="token class-name">FetchDescriptor</span><span class="token operator">&lt;</span><span class="token class-name">Movie</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>sortBy<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">SortDescriptor</span><span class="token punctuation">(</span><span class="token punctuation">\\</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">                movies <span class="token operator">=</span> <span class="token keyword">try</span> modelContext<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span>descriptor<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Fetch failed&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>I place view models into an extension on their view, to help keep names simple – I&#39;d much rather refer to <code>ViewModel</code> than something like <code>ContentViewViewModel</code>.</p></div><p>Your view model doesn&#39;t need to perform a complete fetch for every change you make, but you do need <em>some</em> way to make sure its data stays up to date over time.</p><p>When it comes to creating the view model, you need to be able to pass in the active model context directly rather than trying to read it from the environment – your view model can&#39;t access the environment at all, and it won&#39;t be available during your SwiftUI view&#39;s initializer.</p><p>So, you&#39;d need something like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> viewModel<span class="token punctuation">:</span> <span class="token class-name">ViewModel</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">List</span><span class="token punctuation">(</span>viewModel<span class="token punctuation">.</span>movies<span class="token punctuation">)</span> <span class="token punctuation">{</span> movie <span class="token keyword">in</span></span>
<span class="line">                <span class="token class-name">VStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token class-name">Text</span><span class="token punctuation">(</span>movie<span class="token punctuation">.</span>title<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>headline<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                    <span class="token class-name">Text</span><span class="token punctuation">(</span>movie<span class="token punctuation">.</span>cast<span class="token punctuation">.</span><span class="token function">formatted</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>and<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">navigationTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;MovieDB&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Add Sample&quot;</span></span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> viewModel<span class="token punctuation">.</span>addSample<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span>modelContext<span class="token punctuation">:</span> <span class="token class-name">ModelContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> viewModel <span class="token operator">=</span> <span class="token class-name">ViewModel</span><span class="token punctuation">(</span>modelContext<span class="token punctuation">:</span> modelContext<span class="token punctuation">)</span></span>
<span class="line">        _viewModel <span class="token operator">=</span> <span class="token class-name">State</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">:</span> viewModel<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, adjust your <code>App</code> struct so that you create your model container by hand, then inject its <code>mainContext</code> into your SwiftUI view, like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@main</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">MovieDBApp</span><span class="token punctuation">:</span> <span class="token class-name">App</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> container<span class="token punctuation">:</span> <span class="token class-name">ModelContainer</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">Scene</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">WindowGroup</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">ContentView</span><span class="token punctuation">(</span>modelContext<span class="token punctuation">:</span> container<span class="token punctuation">.</span>mainContext<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">modelContainer</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">do</span> <span class="token punctuation">{</span></span>
<span class="line">            container <span class="token operator">=</span> <span class="token keyword">try</span> <span class="token class-name">ModelContainer</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token class-name">Movie</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Failed to create ModelContainer for Movie.&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It takes only a little more work, but the result is definitely more friendly for unit testing you can create a standalone instance of the view model rather than running it through UI tests.</p><p>However, this is only the first step to getting MVVM working well, because you&#39;d also need to track updates for individual objects if a <code>Movie</code> has its cast list adjusted, for example, that needs to be reflected in your data.</p><p>This is obviously quite a lot of work right now, which is why a number of people have said outright that they think MVVM is dead with SwiftData. I wouldn&#39;t go quite that far, but I am certainly counting down the days until we get an <code>NSFetchedResultsController</code> equivalent for SwiftData…</p>`,22);function f(p,b){const s=u("VPCard");return r(),i("div",null,[n("h1",k,[n("a",m,[n("span",null,l(p.$frontmatter.title)+" 관련",1)])]),a(s,t(e({title:"SwiftData by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftdata/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),v,w,a(s,t(e({title:"How to use MVVM to separate SwiftData from your views | SwiftData by Example",desc:"How to use MVVM to separate SwiftData from your views",link:"https://hackingwithswift.com/quick-start/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),h])}const M=o(d,[["render",f],["__file","how-to-use-mvvm-to-separate-swiftdata-from-your-views.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views.html","title":"How to use MVVM to separate SwiftData from your views","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"How to use MVVM to separate SwiftData from your views","description":"Article(s) > How to use MVVM to separate SwiftData from your views","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftdata","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > How to use MVVM to separate SwiftData from your views"},{"property":"og:description","content":"How to use MVVM to separate SwiftData from your views"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"How to use MVVM to separate SwiftData from your views"}],["meta",{"property":"og:description","content":"Article(s) > How to use MVVM to separate SwiftData from your views"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftdata"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2023-09-30T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to use MVVM to separate SwiftData from your views\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-30T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/hackingwithswift.com/swiftdata/how-to-access-a-swiftdata-container-from-widgets.md","date":"2023-09-30T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.1,"words":931},"filePathRelative":"hackingwithswift.com/swiftdata/how-to-use-mvvm-to-separate-swiftdata-from-your-views.md","localizedDate":"2023년 9월 30일","excerpt":"\\n"}');export{M as comp,S as data};
