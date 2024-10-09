import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,b as e,t as h,e as a,n as m,g as f,w as n,d as t,f as g,r as o,o as v}from"./app-BgNevrm5.js";const y={},b={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"table-of-contents"},_=e("hr",null,null,-1),x=e("p",null,"The more I study React.js, the more I fall in love with it. No doubt that it’s one of the most useful and loved front-end JavaScript libraries out there. And the improvements that the React team have made lately don’t just affect developers, but also those who use applications built with React.",-1),R=g(`<p>In this guide, I’m going to talk about some important things that I’ve learned while developing React apps. And these learnings are optimized based on using React Hooks. We’ll debunk some common myths, simplify common concepts, and optimize your code for the best performance.</p><hr><h2 id="how-will-this-guide-benefit-you" tabindex="-1"><a class="header-anchor" href="#how-will-this-guide-benefit-you"><span>How Will This Guide Benefit You?</span></a></h2><p>Let’s say you have a knife and I ask you to cut out some shapes from a piece of cloth. You could do it, but it would take a while and be challenging using a knife. Instead, what if I gave you a pair of really sharp scissors and then asked you to cut out the patterns? It’d be much easier, right?</p><p>This guide is like that optimised approach of cutting cloth with scissors instead of a knife. I’ll teach you how to use React more easily, without as much struggle. We’ll discuss the important aspects of how React Hooks work, and we’ll also cover some do’s &amp; don’ts.</p><hr><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><p>There is only one main prerequisite for following this guide: you should have used React hooks at least once. And by this I mean developed an application with React that leverages the power of hooks.</p><p>This article is for everyone who wishes to use React hooks to their full potential.</p><hr><h2 id="react-state-must-be-immutable" tabindex="-1"><a class="header-anchor" href="#react-state-must-be-immutable"><span>React State Must Be Immutable</span></a></h2><p>Have you ever wondered why React makes such a fuss about immutability? 🤔 As a newbie, you might think that JavaScript&#39;s mutations are perfectly fine. After all, we add or remove properties from objects and manipulate arrays with ease.</p><p>But here&#39;s the twist: in React, immutability isn&#39;t about never changing state, it&#39;s about ensuring consistency.</p><p>When you mutate state directly, React can’t detect changes reliably. This means your UI might not update as expected. The trick? Replace old data with new copies.</p><p>For instance, if you need to add a user, you should create a new array with the new user included, rather than pushing directly into the existing array.</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre><code><span class="line"><span class="token keyword">const</span> updatedUsers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>users<span class="token punctuation">,</span> newUser<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The code <code>const updatedUsers = [...users, newUser];</code> uses the spread operator to create a new array, <code>updatedUsers</code>, which combines the existing <code>users</code> with <code>newUser</code>.</p><p>This approach maintains immutability in React by not modifying the original <code>users</code> array. Instead, it creates a new state representation, allowing React to optimize rendering and ensure predictable state changes. When you update the state using <code>setUsers(updatedUsers);</code>, React re-renders the component based on this new array, adhering to best practices for state management.</p><p>This ensures React detects the change and re-renders your component smoothly.</p><hr><h2 id="don-t-use-usestate-for-everything" tabindex="-1"><a class="header-anchor" href="#don-t-use-usestate-for-everything"><span>Don&#39;t Use <code>useState</code> for Everything</span></a></h2><p>Confession time: I used to throw everything into <code>useState</code> without thinking twice. 🚀 But here&#39;s the scoop: not everything needs to be in state. The state is powerful, but overusing it can lead to complex and inefficient code.</p><p>Consider alternatives like server state, URL state, or local storage. For server data, libraries like React Query are a game changer. They handle fetching and caching so you don’t have to manage it manually. For URL state, leverage hooks like <code>useLocation</code> from React Router or Next.js’s built-in methods.</p><p>Checklist before using useState:</p><ul><li>Is this value simple and derivable during render?</li><li>Does a library already manage this state?</li><li>Does it need to trigger a re-render?</li><li>If you answer “no” to all, you might not need <code>useState</code> at all.</li></ul><hr><h2 id="derive-values-without-state" tabindex="-1"><a class="header-anchor" href="#derive-values-without-state"><span>Derive Values Without State</span></a></h2><p>Here’s a little-known trick: Derived values don&#39;t need to live in state. 🚀 If your data can be computed from existing states or props, calculate it directly during render.</p><p>For example, formatting a date can be done on the fly without additional hooks:</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre><code><span class="line"><span class="token keyword">const</span> formattedDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The code <code>const formattedDate = new Date(date).toLocaleDateString();</code> derives a formatted date string from a given <code>date</code> input without storing it in the component&#39;s state. By creating <code>formattedDate</code> as a constant, it calculates the value on the fly each time it&#39;s called, reflecting the current state of <code>date</code>.</p><p>This approach avoids unnecessary state management, simplifies rendering logic, and keeps the component efficient, as derived values are recalculated only when the underlying data changes. Thus, it promotes a clean, functional style of programming in React</p><p>This keeps your components clean and avoids unnecessary state updates.</p><hr><h2 id="compute-values-without-effects" tabindex="-1"><a class="header-anchor" href="#compute-values-without-effects"><span>Compute Values Without Effects</span></a></h2><p>Stop using useEffect for simple computations! 🛑 If your value can be calculated directly from state or props and doesn’t involve side effects, do it during render. For expensive computations, wrap them in useMemo to optimize performance:</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre><code><span class="line"><span class="token keyword">const</span> expensiveValue <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">computeExpensiveValue</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This reduces the complexity of your code and keeps your components focused.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The code <code>const expensiveValue = useMemo(() =&gt; computeExpensiveValue(data), [data]);</code> uses the <code>useMemo</code> hook to compute a value (<code>expensiveValue</code>) based on the <code>data</code> input without triggering side effects.</p><p>It memoizes the result of <code>computeExpensiveValue(data)</code>, recalculating it only when <code>data</code> changes. This approach prevents unnecessary recalculations on every render, enhancing performance for expensive computations.</p><p>By relying on <code>useMemo</code>, the component efficiently derives the value based on its current props or state, keeping the rendering process efficient and focused on the latest data.</p><hr><h2 id="keys-should-be-unique" tabindex="-1"><a class="header-anchor" href="#keys-should-be-unique"><span>Keys Should Be Unique</span></a></h2><p>Guilty as charged: I’ve used array indexes as keys in lists before. 😅 But did you know this can lead to bugs? React relies on unique keys to identify items, and using non-unique values can mess things up.</p><p>Generate unique IDs using crypto.randomUUID() but make sure to do it only when your state updates, not on every render. For objects, consider adding an id property:</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre><code><span class="line"><span class="token keyword">const</span> itemWithId <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>item<span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">generateUniqueId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The code <code>const itemWithId =</code> <a href="http://items.map" target="_blank" rel="noopener noreferrer"><code>items.map</code></a><code>(item =&gt; ({ ...item, id: generateUniqueId() }));</code> creates a new array, itemWithId, where each item in the items array is augmented with a unique id.</p><p>The spread operator (<code>...item</code>) copies the properties of each item, while <code>generateUniqueId()</code> generates a new, unique identifier. This ensures that each item has a distinct key, which is crucial for React components when rendering lists.</p><p>Unique keys help React efficiently manage updates, identify changes, and optimize rendering performance by distinguishing between different list items.</p><hr><h2 id="don-t-leave-out-dependencies" tabindex="-1"><a class="header-anchor" href="#don-t-leave-out-dependencies"><span>Don&#39;t Leave Out Dependencies</span></a></h2><p>One of React’s cruel quirks: Forgetting dependencies in <code>useEffect</code> can lead to stale closures. 😱 For example, if you <code>useEffect</code> doesn’t include the dependencies it needs, it might not update as expected.</p><p>Always double-check your dependency arrays:</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre><code><span class="line"><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">// Effect logic}, [dependency]);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The code <code>useEffect(() =&gt; { /* Effect logic */ }, [dependency]);</code> defines a side effect in a React component that runs when the specified <code>dependency</code> changes. It&#39;s essential to include all relevant dependencies in the dependency array to ensure that the effect behaves correctly.</p><p>Omitting dependencies can lead to stale or incorrect values being used in the effect, as React may not re-run it when needed. Including all dependencies helps maintain synchronization between the component&#39;s state and the effect, ensuring predictable behaviour and preventing potential bugs related to missed updates.</p><p>If your UI isn’t updating correctly, this is often the culprit.</p><hr><h2 id="use-useeffect-last" tabindex="-1"><a class="header-anchor" href="#use-useeffect-last"><span>Use <code>useEffect</code> Last</span></a></h2><p>Here’s a pro tip: Don’t rush to use <code>useEffect</code>. 🙅‍♂️ It’s powerful but can lead to messy code if overused. React frameworks provide solutions to manage side effects more elegantly. For data fetching, consider libraries like TanStack Query or SWR that handle requests and caching efficiently, leading to a better user experience.</p><p>Alternative strategies:</p><ul><li>Derive values directly.</li><li>Respond to events with handlers.</li></ul><p>Fetch data on the server or with dedicated libraries.</p><hr><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2><p>React is a robust library, but knowing how to use it effectively can make all the difference. These lessons are just the beginning.</p><p>Having an in-depth idea about in and outs of any technology helps you during development and optimization.</p><p>React Js is the perfect library for modern development it has everything to offer for development and optimization</p><p>Thanks for reading, and happy coding! 🎉</p>`,68),I={href:"https://x.com/prankurpandeyy",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"prankurpandeyy",-1),S={href:"https://linkedin.com/in/prankurpandeyy",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"prankurpandeyy",-1),E={href:"https://prankurpandeyy.netlify.app",target:"_blank",rel:"noopener noreferrer"};function T(r,P){const c=o("VPCard"),s=o("router-link"),l=o("SiteInfo"),p=o("RouteLink"),i=o("FontIcon");return v(),u("div",null,[e("h1",b,[e("a",k,[e("span",null,h(r.$frontmatter.title)+" 관련",1)])]),a(c,m(f({title:"React.js > Article(s)",desc:"Article(s)",link:"/programming/js-react/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),e("nav",w,[e("ul",null,[e("li",null,[a(s,{to:"#how-will-this-guide-benefit-you"},{default:n(()=>[t("How Will This Guide Benefit You?")]),_:1})]),e("li",null,[a(s,{to:"#prerequisites"},{default:n(()=>[t("Prerequisites")]),_:1})]),e("li",null,[a(s,{to:"#react-state-must-be-immutable"},{default:n(()=>[t("React State Must Be Immutable")]),_:1})]),e("li",null,[a(s,{to:"#don-t-use-usestate-for-everything"},{default:n(()=>[t("Don't Use useState for Everything")]),_:1})]),e("li",null,[a(s,{to:"#derive-values-without-state"},{default:n(()=>[t("Derive Values Without State")]),_:1})]),e("li",null,[a(s,{to:"#compute-values-without-effects"},{default:n(()=>[t("Compute Values Without Effects")]),_:1})]),e("li",null,[a(s,{to:"#keys-should-be-unique"},{default:n(()=>[t("Keys Should Be Unique")]),_:1})]),e("li",null,[a(s,{to:"#don-t-leave-out-dependencies"},{default:n(()=>[t("Don't Leave Out Dependencies")]),_:1})]),e("li",null,[a(s,{to:"#use-useeffect-last"},{default:n(()=>[t("Use useEffect Last")]),_:1})]),e("li",null,[a(s,{to:"#conclusion"},{default:n(()=>[t("Conclusion")]),_:1})])])]),_,a(l,{name:"React Best Practices Ever Developer Should Know",desc:"The more I study React.js, the more I fall in love with it. No doubt that it’s one of the most useful and loved front-end JavaScript libraries out there. And the improvements that the React team have made lately don’t just affect developers, but also...",url:"https://freecodecamp.org/news/react-best-practices-ever-developer-should-know",logo:"https://cdn.freecodecamp.org/universal/favicons/favicon.ico",preview:"https://cdn.hashnode.com/res/hashnode/image/upload/v1727898200192/2b6b5882-f4e7-4cb5-9f97-4974669825fc.webp"}),x,e("p",null,[a(p,{to:"/freecodecamp.org/learn-react-hooks-with-example-code.html"},{default:n(()=>[t("In a previous article")]),_:1}),t(", I talked about various React Hooks and how they work along with code samples and detailed explanations.")]),R,e("ul",null,[e("li",null,[e("a",I,[t("Follow Me on X ("),a(i,{icon:"fa-brands fa-x-twitter"}),j,t(")")])]),e("li",null,[e("a",S,[t("Follow me on LinkedIn ("),a(i,{icon:"fa-brands fa-linkedin"}),D,t(")")])]),e("li",null,[e("a",E,[a(i,{icon:"fas fa-globe"}),t("Look at my Portfolio here")])])])])}const q=d(y,[["render",T],["__file","react-best-practices-ever-developer-should-know.html.vue"]]),V=JSON.parse(`{"path":"/freecodecamp.org/react-best-practices-ever-developer-should-know.html","title":"React Best Practices Ever Developer Should Know","lang":"en-US","frontmatter":{"lang":"en-US","title":"React Best Practices Ever Developer Should Know","description":"Article(s) > React Best Practices Ever Developer Should Know","icon":"fa-brands fa-react","category":["Article(s)","Node.js","React.js"],"tag":["blog","freecodecamp.org","node","nodejs","node-js","react","reactjs","react-js"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > React Best Practices Ever Developer Should Know"},{"property":"og:description","content":"React Best Practices Ever Developer Should Know"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/react-best-practices-ever-developer-should-know.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/freecodecamp.org/react-best-practices-ever-developer-should-know.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"React Best Practices Ever Developer Should Know"}],["meta",{"property":"og:description","content":"Article(s) > React Best Practices Ever Developer Should Know"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727898200192/2b6b5882-f4e7-4cb5-9f97-4974669825fc.webp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727898200192/2b6b5882-f4e7-4cb5-9f97-4974669825fc.webp"}],["meta",{"name":"twitter:image:alt","content":"React Best Practices Ever Developer Should Know"}],["meta",{"property":"article:author","content":"Prankur Pandey"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"freecodecamp.org"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:tag","content":"nodejs"}],["meta",{"property":"article:tag","content":"node-js"}],["meta",{"property":"article:tag","content":"react"}],["meta",{"property":"article:tag","content":"reactjs"}],["meta",{"property":"article:tag","content":"react-js"}],["meta",{"property":"article:published_time","content":"2024-10-03T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"React Best Practices Ever Developer Should Know\\",\\"image\\":[\\"https://cdn.hashnode.com/res/hashnode/image/upload/v1727898200192/2b6b5882-f4e7-4cb5-9f97-4974669825fc.webp\\"],\\"datePublished\\":\\"2024-10-03T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Prankur Pandey\\"}]}"]],"prev":"/programming/js-react/articles/README.md","date":"2024-10-03T00:00:00.000Z","isOriginal":false,"author":"Prankur Pandey","cover":"https://cdn.hashnode.com/res/hashnode/image/upload/v1727898200192/2b6b5882-f4e7-4cb5-9f97-4974669825fc.webp"},"headers":[{"level":2,"title":"How Will This Guide Benefit You?","slug":"how-will-this-guide-benefit-you","link":"#how-will-this-guide-benefit-you","children":[]},{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"React State Must Be Immutable","slug":"react-state-must-be-immutable","link":"#react-state-must-be-immutable","children":[]},{"level":2,"title":"Don't Use useState for Everything","slug":"don-t-use-usestate-for-everything","link":"#don-t-use-usestate-for-everything","children":[]},{"level":2,"title":"Derive Values Without State","slug":"derive-values-without-state","link":"#derive-values-without-state","children":[]},{"level":2,"title":"Compute Values Without Effects","slug":"compute-values-without-effects","link":"#compute-values-without-effects","children":[]},{"level":2,"title":"Keys Should Be Unique","slug":"keys-should-be-unique","link":"#keys-should-be-unique","children":[]},{"level":2,"title":"Don't Leave Out Dependencies","slug":"don-t-leave-out-dependencies","link":"#don-t-leave-out-dependencies","children":[]},{"level":2,"title":"Use useEffect Last","slug":"use-useeffect-last","link":"#use-useeffect-last","children":[]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":1}]},"readingTime":{"minutes":5.48,"words":1643},"filePathRelative":"freecodecamp.org/react-best-practices-ever-developer-should-know.md","localizedDate":"October 3, 2024","excerpt":"\\n","copyright":{"author":"Prankur Pandey"}}`);export{q as comp,V as data};
