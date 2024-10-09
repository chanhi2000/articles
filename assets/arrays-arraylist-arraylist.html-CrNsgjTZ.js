import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,t as u,e as s,n as d,g as k,w as e,f as m,r as a,o as v,d as p}from"./app-BgNevrm5.js";const g={},y={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},h={class:"table-of-contents"},f=n("hr",null,null,-1),w=m(`<p><code>Arrays.asList(어레이)</code> 는 <code>String[]</code> 등의 배열을 <code>List&lt;String&gt;</code> 리스트로 바꿀 때 매우 자주 쓰던 메소드였습니다.</p><p>그런데 어느날 이렇게 짜고 나니 오류가 빠방!!!</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token comment">// 사진 url 배열을 리스트로 만들고</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> photoList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>photoUrls<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 해당 리스트에 또 다른 사진들을 추가 arrayList 형태</span></span>
<span class="line"><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> photoList2 <span class="token operator">=</span> <span class="token function">getPhotoList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">photoList<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>photoList2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// java.lang.UnsupportedOperationException</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>java.lang.UnsupportedOperationException</code> 은 자주 못보던 오류라 열심히 찾아봤더니, 문제는 <code>Arrays.asList()</code> method 의 결과물은 우리가 흔히 쓰는 <code>java.util.ArrayList</code> 가 아니라 <code>Arrays</code> 안에 있는 inner class 였습니다.</p><h2 id="arrays-arraylist" tabindex="-1"><a class="header-anchor" href="#arrays-arraylist"><span>Arrays$arrayList</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@serial</span> include</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token keyword">implements</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2764017481108945198L</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        a <span class="token operator">=</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> size<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">,</span> size<span class="token punctuation">,</span></span>
<span class="line">                                    <span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token operator">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> a<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> size<span class="token punctuation">)</span></span>
<span class="line">            a<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> a<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/***</span>
<span class="line">            중략</span>
<span class="line">            ***/</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드를 보시면 알 수 있듯이, abstractList 를 상속받아서 생성되었고 딱히 list 에 있는 <code>add</code> 나 <code>addAll</code> method 를 override 하지 않고 있습니다. 그렇기에 결국 해당 <code>addAll(컬렉션)</code> 을 사용하면 <code>AbstractCollection</code> 의 <code>addAll</code> 메소드가 수행되게 됩니다. ( <code>AbstractList</code> 에 <code>addAll(collection)</code> 메소드가 없기때문에 상속받은 <code>AbstractCollection</code>것을 수행)</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token doc-comment comment">/** AbstractCollection class 발췌 **/</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">boolean</span> modified <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">E</span> e <span class="token operator">:</span> c<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// abstractList 의 add 사용</span></span>
<span class="line">            modified <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> modified<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/** AbstractCollection class 발췌 **/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 일반적인 add 메소드는 가능</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">*</span><span class="token operator">*</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token comment">// 아래 add(index,element) 호출</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 오류남... 결국 add(index,element) 를 재구현 하지 않으면 죄다 못쓰는 메소드</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같은 <code>addAll</code> 메소드를 그대로 사용하다보니 처음에 제가 <code>addAll</code> 하게 된 부분에서 <code>UnsupportedOperationException</code> 가 나오게 된 것입니다. 파라미터에 인덱스가 있는 <code>add</code> 를 Override 해야지만 <code>addAll</code> 도 쓸 수 있게 되는 상태로 보이는데, <code>Arrays.asList</code> 의 결과인 <code>Arrays$arrayList</code>클래스는 굳이 그렇게 만들지 않았기에 오류가 나네요.</p><hr><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론"><span>결론</span></a></h2><p><code>Arrays.asList(배열)</code> 의 결과인 <code>arrayList</code> 는 기존의<code>java.util.ArrayList</code> 와는 다르며, <code>addAll</code> 메소드를 쓸 수 없는 상태다... 라고 알아 두면 될것 같습니다.</p><p>아무튼 이렇게 또 하나 배우게 되는 하루였습니다. 닮았지만 부족한 녀석을 주의하세요.</p>`,13);function A(c,_){const o=a("VPCard"),t=a("router-link"),l=a("SiteInfo");return v(),r("div",null,[n("h1",y,[n("a",b,[n("span",null,u(c.$frontmatter.title)+" 관련",1)])]),s(o,d(k({title:"Java > Article(s)",desc:"Article(s)",link:"/programming/java/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),n("nav",h,[n("ul",null,[n("li",null,[s(t,{to:"#arrays-arraylist"},{default:e(()=>[p("Arrays$arrayList")]),_:1})]),n("li",null,[s(t,{to:"#결론"},{default:e(()=>[p("결론")]),_:1})])])]),f,s(l,{name:"날 닮은 너를, 부족한 너를.",desc:"Arrays.arrayList 는 ArrayList 와 다르다",url:"https://blog.gangnamunni.com/post/Arrays-arrayList-ArrayList/",logo:"https://blog.gangnamunni.com/favicon.ico",preview:"https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"}),w])}const x=i(g,[["render",A],["__file","arrays-arraylist-arraylist.html.vue"]]),E=JSON.parse('{"path":"/blog.gangnamunni.com/arrays-arraylist-arraylist.html","title":"날 닮은 너를, 부족한 너를.","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"날 닮은 너를, 부족한 너를.","description":"Article(s) > 날 닮은 너를, 부족한 너를.","icon":"fa-brands fa-java","category":["Java","Article(s)"],"tag":["blog","blog.gangnamunni.com","java","arraylist","arrays"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > 날 닮은 너를, 부족한 너를."},{"property":"og:description","content":"날 닮은 너를, 부족한 너를."},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/blog.gangnamunni.com/arrays-arraylist-arraylist.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/blog.gangnamunni.com/arrays-arraylist-arraylist.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"날 닮은 너를, 부족한 너를."}],["meta",{"property":"og:description","content":"Article(s) > 날 닮은 너를, 부족한 너를."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"}],["meta",{"name":"twitter:image:alt","content":"날 닮은 너를, 부족한 너를."}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"blog.gangnamunni.com"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"arraylist"}],["meta",{"property":"article:tag","content":"arrays"}],["meta",{"property":"article:published_time","content":"2019-09-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"날 닮은 너를, 부족한 너를.\\",\\"image\\":[\\"https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg\\"],\\"datePublished\\":\\"2019-09-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/programming/java/articles/README.md","date":"2019-09-01T00:00:00.000Z","isOriginal":false,"cover":"https://blog.gangnamunni.com/_nuxt/img/ae65a45.jpg"},"headers":[{"level":2,"title":"Arrays$arrayList","slug":"arrays-arraylist","link":"#arrays-arraylist","children":[]},{"level":2,"title":"결론","slug":"결론","link":"#결론","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.07,"words":322},"filePathRelative":"blog.gangnamunni.com/arrays-arraylist-arraylist.md","localizedDate":"2019년 9월 1일","excerpt":"\\n"}');export{x as comp,E as data};
