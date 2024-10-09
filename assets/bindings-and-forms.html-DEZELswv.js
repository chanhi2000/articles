import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,t as l,e as s,n as t,g as a,f as d,r as i,o as u}from"./app-BgNevrm5.js";const h={},m={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},w=e("nav",{class:"table-of-contents"},[e("ul")],-1),g=e("hr",null,null,-1),f=e("blockquote",null,[e("p",null,"Update for Xcode 16")],-1),v=d(`<p>So far we&#39;ve let users browse the menu, add items to an order, then see their total order. What we <em>haven&#39;t</em> done is create a mechanism to confirm that order, so that&#39;s our next job.</p><p>While this won&#39;t actually send anything off to a server somewhere, I do at least want to use this opportunity to show off one of SwiftUI&#39;s most impressive features: <em>forms</em>.</p><p>Forms are containers like stacks, but they are specifically designed for things like settings screens and user input – anywhere the user might want to make several choices in one place. Forms do a few interesting things as you&#39;ll see, and along the way I&#39;ll be showing you how to use common UI controls like pickers, text fields, segmented controls, and more.</p><p>Now I know what you&#39;re thinking: surely text fields are easy? Well, they aren&#39;t <em>hard</em>, but they also don&#39;t work like you&#39;re used to in UIKit.</p><p>To get things up and running let&#39;s create a new <code>CheckoutView</code> struct that we&#39;ll present when Place Order is pressed. Press <kbd>Cmd</kbd>+<kbd>N</kbd> to add a new SwiftUI View called “CheckoutView”, then give it the same <code>@EnvironmentObject</code> property the other views have:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@EnvironmentObject</span> <span class="token keyword">var</span> order<span class="token punctuation">:</span> <span class="token class-name">Order</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Make sure to also provide that in the preview for the view:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">CheckoutView_Previews</span><span class="token punctuation">:</span> <span class="token class-name">PreviewProvider</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">var</span> previews<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">CheckoutView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">environmentObject</span><span class="token punctuation">(</span><span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s the easy stuff out of the way, so let&#39;s try something new: let&#39;s show a picker with various payment options, allowing users to choose cash, credit card, or iDine Points.</p><p>This requires two new properties. First, we need a property that lists all possible values we want to show in our picker – add this now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> paymentTypes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;Cash&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;Credit Card&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;iDine Points&quot;</span></span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Second, we need a property where SwiftUI can store the value that&#39;s selected in the picker. You see, when our UI changes SwiftUI wants to know about it so that it can update our view – maybe some views that were hidden are now shown, for example. Rather than us asking to watch changes by hand, we instead <em>bind</em> our picker to a property on our struct, so that when the picker changes SwiftUI automatically changes the property too. And, just like environment objects, this will cause SwiftUI to re-invoke our <code>body</code> property so any changes are visible.</p><p>We already used <code>@EnvironmentObject</code> for working with data that comes from an external source. Here, though, this data is just for our view, and will be a simple value rather than a dedicated class that conforms to <code>ObservableObject</code>.</p><p>SwiftUI gives us a different property wrapper for these simple local values: <code>@State</code>. It works similarly to <code>@EnvironmentObject</code> in that if the object changes it automatically refreshes our UI, but it&#39;s designed for simple local values like integers and strings – if you want to use classes like <code>Order</code> you need to use something else instead.</p><div class="hint-container important"><p class="hint-container-title">Important</p><p>If you want to use simple values that are used only by the current view you should use <code>@State</code> for your property wrapper. Apple also recommends you mark those properties as <code>private</code> to reiterate that they aren&#39;t designed for external access.</p></div><p>Add this property to <code>CheckoutView</code> now:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> paymentType <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Cash&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Now let&#39;s fill in the <code>body</code> property with a picker. This is all new, so I&#39;ll give you the code first then go over what it does:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token class-name">VStack</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Section</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Picker</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;How do you want to pay?&quot;</span></span><span class="token punctuation">,</span> selection<span class="token punctuation">:</span> $paymentType<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name">ForEach</span><span class="token punctuation">(</span>paymentTypes<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token short-argument">$0</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">navigationTitle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;Payment&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">navigationBarTitleDisplayMode</span><span class="token punctuation">(</span><span class="token punctuation">.</span>inline<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://hackingwithswift.com/img/books/quick-start/swiftui/2-12~dark.png" alt="Xcode showing the SwiftUI code required to generate a wheel picker for iOS, with a preview showing the results." tabindex="0" loading="lazy"><figcaption>Xcode showing the SwiftUI code required to generate a wheel picker for iOS, with a preview showing the results.</figcaption></figure><p>Let&#39;s break that down:</p><ol><li>We have a vertical stack containing one section.</li><li>That section contains a picker, which uses <code>$paymentType</code> for its selection.</li><li>It has a label that won&#39;t be visible yet, but that will change in a moment.</li><li>Inside the picker we loop over all the payment types and add them as an option.</li><li>The screen has the title “Payment” in small text rather than a large title.</li></ol><p>Of course, the <em>real</em> question is: why <code>$paymentType</code> and not <code>paymentType</code>?</p>`,23),y={class:"hint-container details"},b=e("summary",null,"Further reading",-1);function _(o,S){const n=i("VPCard"),c=i("VidStack");return u(),r("div",null,[e("h1",m,[e("a",k,[e("span",null,l(o.$frontmatter.title)+" 관련",1)])]),s(n,t(a({title:"SwiftUI by Example",desc:"Back to Home",link:"/hackingwithswift.com/swiftui/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),w,g,s(n,t(a({title:"Bindings and forms | SwiftUI by Example",desc:"Bindings and forms",link:"https://hackingwithswift.com/quick-start/swiftui/bindings-and-forms",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),f,s(c,{src:"youtube/KxfUnedCxyI"}),v,e("details",y,[b,s(n,t(a({title:"Working with state | SwiftUI by Example",desc:"Working with state",link:"/hackingwithswift.com/swiftui/working-with-state.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),s(n,t(a({title:"How to create a picker and read values from it | SwiftUI by Example",desc:"How to create a picker and read values from it",link:"/hackingwithswift.com/swiftui/how-to-create-a-picker-and-read-values-from-it.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const q=p(h,[["render",_],["__file","bindings-and-forms.html.vue"]]),T=JSON.parse('{"path":"/hackingwithswift.com/swiftui/bindings-and-forms.html","title":"Bindings and forms","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Bindings and forms","description":"Article(s) > Bindings and forms","category":["Swift","SwiftUI","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","swiftui","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Bindings and forms"},{"property":"og:description","content":"Bindings and forms"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/bindings-and-forms.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/swiftui/bindings-and-forms.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Bindings and forms"}],["meta",{"property":"og:description","content":"Article(s) > Bindings and forms"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://hackingwithswift.com/img/books/quick-start/swiftui/2-12~dark.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"swiftui"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2022-12-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bindings and forms\\",\\"image\\":[\\"https://hackingwithswift.com/img/books/quick-start/swiftui/2-12~dark.png\\"],\\"datePublished\\":\\"2022-12-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2022-12-01T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.04,"words":912},"filePathRelative":"hackingwithswift.com/swiftui/bindings-and-forms.md","localizedDate":"2022년 12월 1일","excerpt":"\\n"}');export{q as comp,T as data};
