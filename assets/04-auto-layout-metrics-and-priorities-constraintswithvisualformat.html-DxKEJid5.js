import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as t,t as p,e,n as s,g as n,f as u,r as o,o as h}from"./app-BgNevrm5.js";const d={},m={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},b=t("nav",{class:"table-of-contents"},[t("ul")],-1),w=t("hr",null,null,-1),f=u(`<p>We have a working layout now, but it&#39;s quite basic: the labels aren&#39;t very high, and without a rule regarding the bottom of the last label it&#39;s possible the views might be pushed off the bottom edge.</p><p>To begin to fix this problem, we&#39;re going to add a constraint for the bottom edge saying that the bottom of our last label must be at least 10 points away from the bottom of the view controller&#39;s view. We&#39;re also going to tell Auto Layout that we want each of the five labels to be 88 points high. Replace the previous vertical constraints with this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;V:|[label1(==88)]-[label2(==88)]-[label3(==88)]-[label4(==88)]-[label5(==88)]-(&gt;=10)-|&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The difference here is that we now have numbers inside parentheses: <code>(==88)</code> for the labels, and <code>(&gt;=10)</code> for the space to the bottom. Note that when specifying the size of a space, you need to use the - before and after the size: a simple space, -, becomes <code>-(&gt;=10)-</code>.</p><p>We are specifying two kinds of size here: <code>==</code> and <code>&gt;=</code>. The first means &quot;exactly equal&quot; and the second &quot;greater than or equal to.&quot; So, our labels will be forced to be an exact size, and we ensure that there&#39;s some space at the bottom while also making it flexible – it will definitely be at least 10 points, but could be 100 or more depending on the situation.</p><p>Actually, wait a minute. I didn&#39;t want 88 points for the label size, I meant 80 points. Go ahead and change all the labels to 80 points high.</p><p>Whoa there! It looks like you just received an email from your IT director: he thinks 80 points is a silly size for the labels; they need to be 64 points, because all good sizes are a power of 2.</p><p>And now it looks like your designer and IT director are having a fight about the right size. A few punches later, they decide to split the difference and go for a number in the middle: 72. So please go ahead and make the labels all 72 points high.</p><p>Bored yet? You ought to be. And yet this is the kind of pixel-pushing it&#39;s easy to fall into, particularly if your app is being designed by committee.</p><p>Auto Layout has a solution, and it&#39;s called <em>metrics</em>. All these calls to <code>constraints(withVisualFormat:)</code> have been sent <code>nil</code> for their metrics parameter, but that&#39;s about to change. You see, you can give VFL a set of sizes with names, then use those sizes in the VFL rather than hard-coding numbers. For example, we wanted our label height to be 88, so we could create a metrics dictionary like this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token keyword">let</span> metrics <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;labelHeight&quot;</span></span><span class="token punctuation">:</span> <span class="token number">88</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then, whenever we had previously written <code>==88</code>, we can now just write <code>labelHeight</code>. So, change your current vertical constraints to be this:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line">view<span class="token punctuation">.</span><span class="token function">addConstraints</span><span class="token punctuation">(</span> <span class="token class-name">NSLayoutConstraint</span><span class="token punctuation">.</span><span class="token function">constraints</span><span class="token punctuation">(</span>withVisualFormat<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;V:|[label1(labelHeight)]-[label2(labelHeight)]-[label3(labelHeight)]-[label4(labelHeight)]-[label5(labelHeight)]-&gt;=10-|&quot;</span></span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> metrics<span class="token punctuation">:</span> metrics<span class="token punctuation">,</span> views<span class="token punctuation">:</span> viewsDictionary<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>So when your designer / manager / inner-pedant decides that 88 points is wrong and you want some other number, you can change it in one place to have everything update.</p><p>Before we&#39;re done, we&#39;re going to make one more change that makes the whole user interface much better, because right now it&#39;s still imperfect. To be more specific, we&#39;re forcing all labels to be a particular height, then adding constraints to the top and bottom. This still works fine in portrait, but in landscape you&#39;re unlikely to have enough room to satisfy all the constraints.</p><p>With our current configuration, you&#39;ll see this message when the app is rotated to landscape: &quot;Unable to simultaneously satisfy constraints.&quot; This means your constraints simply don&#39;t work given how much screen space there is, and that&#39;s where <em>priority</em> comes in. You can give any layout constraint a priority, and Auto Layout will do its best to make it work.</p><p>Constraint priority is a value between 1 and 1000, where 1000 means &quot;this is absolutely required&quot; and anything less is optional. By default, all constraints you have are priority 1000, so Auto Layout will fail to find a solution in our current layout. But if we make the height optional – even as high as priority 999 – it means Auto Layout can find a solution to our layout: shrink the labels to make them fit.</p><p>It&#39;s important to understand that Auto Layout doesn&#39;t just discard rules it can&#39;t meet – it still does its best to meet them. So in our case, if we make our 88-point height optional, Auto Layout might make them 78 or some other number. That is, it will still do its best to make them as close to 88 as possible. TL;DR: constraints are evaluated from highest priority down to lowest, but all are taken into account.</p><p>So, we&#39;re going to make the label height have priority 999 (i.e., very important, but not required). But we&#39;re also going to make one other change, which is to tell Auto Layout that we want all the labels to have the same height. This is important, because if all of them have optional heights using <code>labelHeight</code>, Auto Layout might solve the layout by shrinking one label and making another 88.</p><p>From its point of view it has at least managed to make some of the labels 88, so it&#39;s probably quite pleased with itself, but it makes our user interface look uneven. So, we&#39;re going to make the first label use <code>labelHeight</code> at a priority of 999, then have the other labels adopt the same height as the first label. Here&#39;s the new VFL line:</p><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift" data-title="swift"><pre><code><span class="line"><span class="token string-literal"><span class="token string">&quot;V:|[label1(labelHeight@999)]-[label2(label1)]-[label3(label1)]-[label4(label1)]-[label5(label1)]-&gt;=10-|&quot;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>It&#39;s the <code>@999</code> that assigns priority to a given constraint, and using <code>(label1)</code> for the sizes of the other labels is what tells Auto Layout to make them the same height.</p><p>That&#39;s it: your Auto Layout configuration is complete, and the app can now be run safely in portrait and landscape.</p>`,23);function y(i,k){const a=o("VPCard"),r=o("VidStack");return h(),c("div",null,[t("h1",m,[t("a",g,[t("span",null,p(i.$frontmatter.title)+" 관련",1)])]),e(a,s(n({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),b,w,e(a,s(n({title:"Auto Layout metrics and priorities: constraints(withVisualFormat:) | Hacking with iOS",desc:"Auto Layout metrics and priorities: constraints(withVisualFormat:)",link:"https://hackingwithswift.com/read/6/4/auto-layout-metrics-and-priorities-constraintswithvisualformat",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),e(r,{src:"youtube/Gyf06HywlxM"}),f])}const L=l(d,[["render",y],["__file","04-auto-layout-metrics-and-priorities-constraintswithvisualformat.html.vue"]]),_=JSON.parse('{"path":"/hackingwithswift.com/read/06/04-auto-layout-metrics-and-priorities-constraintswithvisualformat.html","title":"Auto Layout metrics and priorities: constraints(withVisualFormat:)","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Auto Layout metrics and priorities: constraints(withVisualFormat:)","description":"Article(s) > Auto Layout metrics and priorities: constraints(withVisualFormat:)","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Auto Layout metrics and priorities: constraints(withVisualFormat:)"},{"property":"og:description","content":"Auto Layout metrics and priorities: constraints(withVisualFormat:)"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/06/04-auto-layout-metrics-and-priorities-constraintswithvisualformat.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/06/04-auto-layout-metrics-and-priorities-constraintswithvisualformat.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Auto Layout metrics and priorities: constraints(withVisualFormat:)"}],["meta",{"property":"og:description","content":"Article(s) > Auto Layout metrics and priorities: constraints(withVisualFormat:)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Auto Layout metrics and priorities: constraints(withVisualFormat:)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":4.01,"words":1204},"filePathRelative":"hackingwithswift.com/read/06/04-auto-layout-metrics-and-priorities-constraintswithvisualformat.md","excerpt":"\\n"}');export{L as comp,_ as data};
