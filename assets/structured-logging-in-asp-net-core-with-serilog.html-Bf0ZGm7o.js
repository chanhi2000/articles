import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as g,b as n,t as d,e as a,n as h,g as m,w as o,d as s,f as l,r as i,o as k}from"./app-BgNevrm5.js";const v={},f={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},S=n("hr",null,null,-1),w=n("p",null,[n("strong",null,"Structured logging"),s(" is a practice where you apply the same message format to all of your application logs. The end result is that all your logs will have a similar structure, allowing them to be easily searched and analyzed.")],-1),q={href:"https://serilog.net/",target:"_blank",rel:"noopener noreferrer"},_=l(`<p>However, <strong>Serilog</strong> is unique because it comes with support for <strong>structured logging</strong> out of the box.</p><p>Let&#39;s see how we can install <strong>Serilog</strong> and configure it an <strong>ASP.NET Core</strong> application.</p><hr><h2 id="installing-serilog" tabindex="-1"><a class="header-anchor" href="#installing-serilog"><span>Installing Serilog</span></a></h2><p>To install <strong>Serilog</strong> in <strong>ASP.NET Core</strong> you can add the following NuGet package:</p><div class="language-pwsh line-numbers-mode" data-highlighter="prismjs" data-ext="pwsh" data-title="pwsh"><pre><code><span class="line">Install-Package Serilog.AspNetCore</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This NuGet packages comes with a simple API to integrate <strong>Serilog</strong> into your application. You can call the <code>UseSerilog</code> method on the <code>HostBuilder</code> instance to provide a lambda method to configure <strong>Serilog</strong>.</p><p>I think the most flexible way to configure Serilog is through application settings, which is achieved by calling <code>ReadFrom.Configuration()</code>.</p><p>You can also call the <code>UseSerilogRequestLogging()</code> method to introduce automatic HTTP request logging in your API.</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> WebApplication<span class="token punctuation">.</span><span class="token function">CreateBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">builder<span class="token punctuation">.</span>Host<span class="token punctuation">.</span><span class="token function">UseSerilog</span><span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> configuration<span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span>
<span class="line">    configuration<span class="token punctuation">.</span>ReadFrom<span class="token punctuation">.</span><span class="token function">Configuration</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Configuration<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">UseSerilogRequestLogging</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The next question is how do you provide the actual configuration values to <strong>Serilog</strong>?</p><hr>`,12),x={id:"configuring-serilog-with-appsettings-json",tabindex:"-1"},I={class:"header-anchor",href:"#configuring-serilog-with-appsettings-json"},T=n("code",null,"appsettings.json",-1),C=n("code",null,"Serilog",-1),j=n("code",null,"appsettings.json",-1),A=l(`<p>Here you can configure, among other things:</p><ul><li>Which <strong>sinks</strong> to use with <strong>Serilog</strong></li><li>Override default and minimum log levels</li><li>Configure file logging arguments</li></ul><p>In this example, we&#39;re adding the <code>Console</code> and <code>File</code> sinks to <strong>Serilog</strong>. And we&#39;re adding some additional configuration for the <code>File</code> sink in the <code>Serilog.WriteTo</code> configuration section. We can configure the output path for the log files, the naming format, which formatter to use for the logs and so on.</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;Serilog&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;Using&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Serilog.Sinks.Console&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Serilog.Sinks.File&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;MinimumLevel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;Default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;Override&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;Microsoft&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Warning&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;System&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Warning&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;WriteTo&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token property">&quot;Name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Console&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">&quot;Name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;File&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">&quot;Args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/logs/log-.txt&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;rollingInterval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Day&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;rollOnFileSizeLimit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">&quot;formatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;Enrich&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;FromLogContext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;WithMachineName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;WithThreadId&quot;</span> <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),N=n("code",null,"Serilog.Configuration",-1),L={href:"https://github.com/serilog/serilog-settings-configuration",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"serilog/serilog-settings-configuration",-1),E=l(`<hr><h2 id="using-serilog-in-asp-net-core" tabindex="-1"><a class="header-anchor" href="#using-serilog-in-asp-net-core"><span>Using Serilog In ASP.NET Core</span></a></h2><p>We managed to successfully install and configure <strong>Serilog</strong>. But how do we actually use it?</p><p><strong>Serilog</strong> integrates with the <code>ILogger</code> interaface coming from the <code>Microsoft.Extensions.Logging</code> namespace. If you&#39;re already using <code>ILogger</code> for logging, everything will continue working correctly.</p><p>Here&#39;s a simple example of logging inside of a Minimal API endpoint:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">MapGet</span><span class="token punctuation">(</span><span class="token string">&quot;/serilog-is-cool&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">ILogger</span> logger<span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    logger<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span><span class="token string">&quot;This is a log inside of the Minimal API endpoint.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> Results<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">{</span> Message <span class="token operator">=</span> <span class="token string">&quot;success&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You just inject an <code>ILogger</code> or <code>ILogger&lt;T&gt;</code> instance and Serilog will provide its own implementation at runtime.</p><hr><h2 id="structured-logging-syntax" tabindex="-1"><a class="header-anchor" href="#structured-logging-syntax"><span>Structured Logging Syntax</span></a></h2><p>The idea behind <strong>structured logging</strong> is that you can introduce additional contextual information inside of your logs. <strong>Serilog</strong> does this using a message template syntax, where you can specify named parameters and then pass in their values separately.</p><p>Here&#39;s an example of what this message template would look like. You specify parameters inside of curly bracers and provide a name, for example <code>{NamedParameter}</code>. The value provided for the parameter will be serialized as a property inside of the corresponding structured log.</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">{</span> Author <span class="token operator">=</span> <span class="token string">&quot;Domain-Driven Design&quot;</span><span class="token punctuation">,</span> Title <span class="token operator">=</span> <span class="token string">&quot;Eric Evans&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> orderNumber <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">log<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&quot;Processing book {@Book}, order number = {@OrderNumber}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    book<span class="token punctuation">,</span></span>
<span class="line">    orderNumber<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are a few things to unpack here:</p><ul><li><code>{@Book}</code> parameter which accepts an object</li><li><code>{OrderNumber}</code> parameter which accepts a scalar value</li></ul><p>The <code>@</code> operator in front of <code>Book</code> tells Serilog to serialize the object passed in, instead of converting it using <code>ToString()</code>.</p><hr><h2 id="benefits-of-structured-logging" tabindex="-1"><a class="header-anchor" href="#benefits-of-structured-logging"><span>Benefits Of Structured Logging</span></a></h2><p>Lastly, I want to highlight what are some of the benefits of <strong>structured logging</strong> and why you should be using it.</p><p>As I said at the beginning, the main idea with <strong>structured logging</strong> is that all log message follow the same structure. This structure can be a JSON document for example, or a row in a relational table. Since structured logs are in a machine-readable format, it&#39;s much easier to search through them for specific information.</p><p>When an error occurs, structured logs can provide more context and details about the error, making it easier to identify the root cause and fix the problem.</p><p>It&#39;s very easy to start doing structured logging with <strong>Serilog</strong>, and I hope you&#39;ll give it a try.</p><p>See you next week, and have an excellent Saturday.</p>`,22);function W(r,M){const c=i("VPCard"),e=i("router-link"),t=i("FontIcon"),p=i("SiteInfo");return k(),g("div",null,[n("h1",f,[n("a",b,[n("span",null,d(r.$frontmatter.title)+" 관련",1)])]),a(c,h(m({title:"C# > Article(s)",desc:"Article(s)",link:"/programming/cs/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),n("nav",y,[n("ul",null,[n("li",null,[a(e,{to:"#installing-serilog"},{default:o(()=>[s("Installing Serilog")]),_:1})]),n("li",null,[a(e,{to:"#configuring-serilog-with-appsettings-json"},{default:o(()=>[s("Configuring Serilog With "),a(t,{icon:"iconfont icon-json"}),s("appsettings.json")]),_:1})]),n("li",null,[a(e,{to:"#using-serilog-in-asp-net-core"},{default:o(()=>[s("Using Serilog In ASP.NET Core")]),_:1})]),n("li",null,[a(e,{to:"#structured-logging-syntax"},{default:o(()=>[s("Structured Logging Syntax")]),_:1})]),n("li",null,[a(e,{to:"#benefits-of-structured-logging"},{default:o(()=>[s("Benefits Of Structured Logging")]),_:1})])])]),S,a(p,{name:"Structured Logging In ASP.NET Core With Serilog",desc:"Structured logging is a practice where you apply the same message format to all of your application logs. The end result is that all your logs will have a similar structure, allowing them to be easily searched and analyzed. Serilog is a popular logging library in .NET, packed with many features. It provides logging to files, logging to the console, and elsewhere. However, why Serilog is unique is because it comes with support for structured logging out of the box.",url:"https://milanjovanovic.tech/blog/structured-logging-in-asp-net-core-with-serilog/",logo:"https://milanjovanovic.tech/profile_favicon.png",preview:"https://milanjovanovic.tech/blog-covers/mnw_025.png"}),w,n("p",null,[n("a",q,[a(t,{icon:"fas fa-globe"}),s("Serilog")]),s(" is a popular logging library in .NET, packed with many features. It provides logging to files, logging to the console, and elsewhere.")]),_,n("h2",x,[n("a",I,[n("span",null,[s("Configuring Serilog With "),a(t,{icon:"iconfont icon-json"}),T])])]),n("p",null,[s("You need to add a "),C,s(" section in your "),a(t,{icon:"iconfont icon-json"}),j,s(" file.")]),A,n("p",null,[s("You can get a more detailed overview of what's supported with the "),N,s(" library in the "),n("a",L,[s("documentation ("),a(t,{icon:"iconfont icon-github"}),P,s(")")]),s(".")]),a(p,{name:"serilog/serilog-settings-configuration",desc:"A Serilog configuration provider that reads from Microsoft.Extensions.Configuration",url:"https://github.com/serilog/serilog-settings-configuration",logo:"https://avatars.githubusercontent.com/u/5691010?s=88&v=4",preview:"https://opengraph.githubassets.com/373bfe5a0337d2ec44960c172d4d9e523fbd6bbece03a5f09f61bada75ee10d0/serilog/serilog-settings-configuration"}),E])}const R=u(v,[["render",W],["__file","structured-logging-in-asp-net-core-with-serilog.html.vue"]]),O=JSON.parse('{"path":"/milanjovanovic.tech/structured-logging-in-asp-net-core-with-serilog.html","title":"Structured Logging In ASP.NET Core With Serilog","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Structured Logging In ASP.NET Core With Serilog","description":"Article(s) > Structured Logging In ASP.NET Core With Serilog","icon":"iconfont icon-csharp","category":["C#","DotNet","Article(s)"],"tag":["blog","milanjovanovic.tech","cs","c#","csharp","dotnet"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Structured Logging In ASP.NET Core With Serilog"},{"property":"og:description","content":"Structured Logging In ASP.NET Core With Serilog"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/structured-logging-in-asp-net-core-with-serilog.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/structured-logging-in-asp-net-core-with-serilog.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Structured Logging In ASP.NET Core With Serilog"}],["meta",{"property":"og:description","content":"Article(s) > Structured Logging In ASP.NET Core With Serilog"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://milanjovanovic.tech/blog-covers/mnw_025.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://milanjovanovic.tech/blog-covers/mnw_025.png"}],["meta",{"name":"twitter:image:alt","content":"Structured Logging In ASP.NET Core With Serilog"}],["meta",{"property":"article:author","content":"Milan Jovanović"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"milanjovanovic.tech"}],["meta",{"property":"article:tag","content":"cs"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"csharp"}],["meta",{"property":"article:tag","content":"dotnet"}],["meta",{"property":"article:published_time","content":"2023-02-18T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Structured Logging In ASP.NET Core With Serilog\\",\\"image\\":[\\"https://milanjovanovic.tech/blog-covers/mnw_025.png\\"],\\"datePublished\\":\\"2023-02-18T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Milan Jovanović\\"}]}"]],"prev":"/programming/cs/articles/README.md","date":"2023-02-18T00:00:00.000Z","isOriginal":false,"author":"Milan Jovanović","cover":"https://milanjovanovic.tech/blog-covers/mnw_025.png"},"headers":[{"level":2,"title":"Installing Serilog","slug":"installing-serilog","link":"#installing-serilog","children":[]},{"level":2,"title":"Configuring Serilog With appsettings.json","slug":"configuring-serilog-with-appsettings-json","link":"#configuring-serilog-with-appsettings-json","children":[]},{"level":2,"title":"Using Serilog In ASP.NET Core","slug":"using-serilog-in-asp-net-core","link":"#using-serilog-in-asp-net-core","children":[]},{"level":2,"title":"Structured Logging Syntax","slug":"structured-logging-syntax","link":"#structured-logging-syntax","children":[]},{"level":2,"title":"Benefits Of Structured Logging","slug":"benefits-of-structured-logging","link":"#benefits-of-structured-logging","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.43,"words":1028},"filePathRelative":"milanjovanovic.tech/structured-logging-in-asp-net-core-with-serilog.md","localizedDate":"2023년 2월 18일","excerpt":"\\n","copyright":{"author":"Milan Jovanović"}}');export{R as comp,O as data};
