import{_ as g}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,b as n,t as h,e as s,n as c,g as l,w as t,d as e,f as u,r as p,o as v}from"./app-BgNevrm5.js";const k={},b={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},w=n("hr",null,null,-1),S={href:"https://particular.net/",target:"_blank",rel:"noopener noreferrer"},N=u('<p>The basic building blocks of NServiceBus are messages and endpoints. A message contains the required information to execute a business operation. Endpoints are logical entities that send and receive messages.</p><p>And now let&#39;s see how to get started with NServiceBus, from installation and setup to building your first NServiceBus endpoint.</p><p>In this week&#39;s newsletter, you will learn how to:</p><ul><li>Configure an endpoint to use Azure Service Bus</li><li>Send and publish messages using <code>IMessageSession</code></li><li>Handle messages with NServiceBus</li></ul><p>Let&#39;s dive in!</p><hr><h2 id="what-is-nservicebus" tabindex="-1"><a class="header-anchor" href="#what-is-nservicebus"><span>What is NServiceBus?</span></a></h2>',7),B={href:"https://go.particular.net/milanjovanovic",target:"_blank",rel:"noopener noreferrer"},_=u(`<p>One of NServiceBus&#39;s foundational principles is its embrace of a message-driven architecture. In this model, components communicate by sending and receiving messages. Messages are the fundamental units of communication, representing commands, events, or data that services exchange.</p><p>Why is this significant?</p><p>Message-driven architectures offer several advantages:</p><ul><li>Asynchronous communication</li><li>Loose coupling</li><li>Reliability</li></ul><p>NServiceBus supports the powerful publish/subscribe (pub/sub) messaging pattern. This pattern allows services to publish events and subscribe to events of interest. When a service publishes an event, all interested subscribers receive a copy of the event. This is a key feature for building event-driven architectures, where services react to and process events in response to various actions or changes in the system.</p><hr><h2 id="configuring-the-nservicebus-endpoint" tabindex="-1"><a class="header-anchor" href="#configuring-the-nservicebus-endpoint"><span>Configuring the NServiceBus Endpoint</span></a></h2><p>NServiceBus uses the concept of an <em>endpoint</em> to send and receive messages. It&#39;s a logical component that communicates with other components. You define your message handlers and sagas inside of an endpoint.</p><p>Let&#39;s start by installing the <code>NServiceBus</code> NuGet package:</p><div class="language-pwsh line-numbers-mode" data-highlighter="prismjs" data-ext="pwsh" data-title="pwsh"><pre><code><span class="line">Install-Package NServiceBus.Extensions.Hosting</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,10),I=n("em",null,"endpoint",-1),C={href:"https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview",target:"_blank",rel:"noopener noreferrer"},x=u(`<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> WebApplication<span class="token punctuation">.</span><span class="token function">CreateBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">builder<span class="token punctuation">.</span>Host<span class="token punctuation">.</span><span class="token function">UseNServiceBus</span><span class="token punctuation">(</span>context <span class="token operator">=&gt;</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name"><span class="token keyword">var</span></span> endpointConfiguration <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">EndpointConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;Training&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name"><span class="token keyword">var</span></span> transport <span class="token operator">=</span> endpointConfiguration</span>
<span class="line">        <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">UseTransport</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AzureServiceBusTransport<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token class-name"><span class="token keyword">var</span></span> connectionString <span class="token operator">=</span> builder<span class="token punctuation">.</span>Configuration</span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">GetConnectionString</span><span class="token punctuation">(</span><span class="token string">&quot;AzureServiceBusConnectionString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    transport<span class="token punctuation">.</span><span class="token function">ConnectionString</span><span class="token punctuation">(</span>connectionString<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    endpointConfiguration<span class="token punctuation">.</span><span class="token function">EnableInstallers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> endpointConfiguration<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name"><span class="token keyword">var</span></span> app <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The call to <code>UseNServiceBus</code> tells the host to use NServiceBus. Inside the callback, you can configure the endpoint that will start when the host runs.</p><p>One more important aspect is calling <code>EnableInstallers</code> to set up the Azure Service Bus topology. This will tell NServiceBus to create the required queues, so you don&#39;t have to do it manually.</p><hr><h2 id="publishing-messages-in-nservicebus" tabindex="-1"><a class="header-anchor" href="#publishing-messages-in-nservicebus"><span>Publishing Messages in NServiceBus</span></a></h2><p>The next building block you need in any messaging system is the messages. Messages are C# classes or interfaces that contain meaningful data for the business process.</p><p>NServiceBus supports three types of messages:</p><ul><li><code>ICommand</code> - sends a request to perform an action</li><li><code>IEvent</code> - communicates that something significant occurred</li><li><code>IMessage</code> - for messages that aren&#39;t commands or events (typically for replies in <em>request-response</em>)</li></ul><p>Events can have more than one handler, while a command should have only one handler.</p><p>Let&#39;s create our first message contract:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token keyword">using</span> <span class="token namespace">NServiceBus</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorkoutCreated</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IEvent</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> Guid Id <span class="token punctuation">[</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>WorkoutCreated</code> message is an event that we will publish after creating a new <code>Workout</code>.</p><p>You can use the <code>IMessageSession</code> service to send messages from your controllers or Minimal API endpoints.</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">MapPost</span><span class="token punctuation">(</span><span class="token string">&quot;api/workouts&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token class-name">Workout</span> workout<span class="token punctuation">,</span></span>
<span class="line">    <span class="token class-name">AppDbContext</span> context<span class="token punctuation">,</span></span>
<span class="line highlighted"><span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;code-line highlight-line&quot;</span><span class="token operator">&gt;</span>    <span class="token class-name">IMessageSession</span> messageSession<span class="token punctuation">)</span> <span class="token operator">=&gt;</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    context<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>workout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">SaveChangesAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;code-line highlight-line&quot;</span><span class="token operator">&gt;</span>    <span class="token keyword">await</span> messageSession<span class="token punctuation">.</span><span class="token function">Publish</span><span class="token punctuation">(</span><span class="token keyword">new</span>  <span class="token constructor-invocation class-name">WorkoutCreated</span> <span class="token punctuation">{</span> Id <span class="token operator">=</span> workout<span class="token punctuation">.</span>Id <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> Results<span class="token punctuation">.</span><span class="token function">Ok</span><span class="token punctuation">(</span>workout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NServiceBus has some built-in validation when sending messages. You have to specify an <code>ICommand</code> when calling the <code>Send</code> method, or you will get an exception. Similarly, you have to specify an <code>IEvent</code> when calling the <code>Publish</code> method.</p><hr><h2 id="handling-messages-with-nservicebus" tabindex="-1"><a class="header-anchor" href="#handling-messages-with-nservicebus"><span>Handling Messages With NServiceBus</span></a></h2><p>Once you send a message, you need a way to handle it and run some business logic. To handle a message, you need to implement the <code>IHandleMessages</code> interface and specify which message you are handling.</p><p>Here&#39;s an implementation of the <code>WorkoutCreatedHandler</code>:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorkoutCreatedHandler</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IHandleMessages<span class="token punctuation">&lt;</span>WorkoutCreated<span class="token punctuation">&gt;</span></span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ILogger<span class="token punctuation">&lt;</span>WorkoutCreated<span class="token punctuation">&gt;</span></span> _logger<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token function">WorkoutCreatedHandler</span><span class="token punctuation">(</span><span class="token class-name">ILogger<span class="token punctuation">&lt;</span>WorkoutCreated<span class="token punctuation">&gt;</span></span> logger<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        _logger <span class="token operator">=</span> logger<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Handle</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token class-name">WorkoutCreated</span> message<span class="token punctuation">,</span></span>
<span class="line">        <span class="token class-name">IMessageHandlerContext</span> context<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        logger<span class="token punctuation">.</span><span class="token function">LogInformation</span><span class="token punctuation">(</span><span class="token string">&quot;Processing workout - {Id}&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">.</span>Id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Continue to process the message.</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Implementing <code>IHandleMessages&lt;WorkoutCreated&gt;</code> tells NServiceBus how to process the <code>WorkoutCreated</code> message when an endpoint receives it. This interface defines only one method: <code>Handle</code>.</p><p>The <code>Handle</code> method has an <code>IMessageHandlerContext</code> parameter, which allows you to send more messages. This can be helpful when implementing a choreographed saga. Processing one message triggers the next step in the chain until the entire process is completed.</p><hr><h2 id="in-summary" tabindex="-1"><a class="header-anchor" href="#in-summary"><span>In Summary</span></a></h2><p>In this week&#39;s issue, we discussed NServiceBus, a robust messaging framework for building distributed systems in .NET. You learned how to configure NServiceBus with the Azure Service Bus transport. We discussed the different message types in NServiceBus and how to publish and handle a message.</p><p>Building distributed systems is a complex endeavor, but NServiceBus simplifies many challenges. By embracing a message-driven architecture and leveraging NServiceBus&#39;s features, you&#39;ll be well-equipped to create resilient, scalable, and maintainable applications in the .NET ecosystem.</p><p>Further reading:</p>`,27),W=n("p",null,"Hope this was helpful.",-1),M=n("p",null,"I'll see you next week!",-1);function T(d,A){const i=p("VPCard"),a=p("router-link"),o=p("SiteInfo"),r=p("FontIcon");return v(),m("div",null,[n("h1",b,[n("a",f,[n("span",null,h(d.$frontmatter.title)+" 관련",1)])]),s(i,c(l({title:"C# > Article(s)",desc:"Article(s)",link:"/programming/cs/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),n("nav",y,[n("ul",null,[n("li",null,[s(a,{to:"#what-is-nservicebus"},{default:t(()=>[e("What is NServiceBus?")]),_:1})]),n("li",null,[s(a,{to:"#configuring-the-nservicebus-endpoint"},{default:t(()=>[e("Configuring the NServiceBus Endpoint")]),_:1})]),n("li",null,[s(a,{to:"#publishing-messages-in-nservicebus"},{default:t(()=>[e("Publishing Messages in NServiceBus")]),_:1})]),n("li",null,[s(a,{to:"#handling-messages-with-nservicebus"},{default:t(()=>[e("Handling Messages With NServiceBus")]),_:1})]),n("li",null,[s(a,{to:"#in-summary"},{default:t(()=>[e("In Summary")]),_:1})])])]),w,s(o,{name:"Getting Started With NServiceBus in .NET",desc:"NServiceBus is a feature-rich messaging framework supporting many different message transports. It's developed and maintained by Particular Software. And it simplifies the process of building complex distributed systems across various cloud-based queueing technologies. The basic building blocks of NServiceBus are messages and endpoints. A message contains the required information to execute a business operation. Endpoints are logical entities that send and receive messages.",url:"https://milanjovanovic.tech/blog/getting-started-with-nservicebus-in-dotnet/",logo:"https://milanjovanovic.tech/profile_favicon.png",preview:"https://milanjovanovic.tech/blog-covers/mnw_058.png"}),n("p",null,[e("NServiceBus is a feature-rich messaging framework supporting many different message transports. It's developed and maintained by "),n("a",S,[s(r,{icon:"fas fa-globe"}),e("Particular Software")]),e(". And it simplifies the process of building complex distributed systems across various cloud-based queueing technologies.")]),N,n("p",null,[n("a",B,[s(r,{icon:"fas fa-globe"}),e("NServiceBus")]),e(" is a messaging framework and platform that simplifies building reliable, scalable, and maintainable distributed systems. It's designed to address the challenges that arise when building applications that are distributed across multiple servers.")]),_,n("p",null,[e("Now you can configure an "),I,e(" to use "),n("a",C,[s(r,{icon:"fa-brands fa-microsoft"}),e("Azure Service Bus")]),e(" to send messages:")]),x,s(o,{name:"NServiceBus Step-by-step: Getting started • Particular Docs",desc:"In this 10-15 minute tutorial, you will learn how to set up a development machine for NServiceBus and create your very first messaging endpoint.",url:"https://go.particular.net/milanjovanovic/getting-started-with-nservicebus",logo:"https://docs.particular.net/favicon.ico",preview:"https://docs.particular.net/preview-image/795e481c8e1e4fcc8adb382ff2b1b398/tutorials/nservicebus-step-by-step/1-getting-started/index.png"}),s(o,{name:"Live coding your first NServiceBus system • Particular Software",desc:"Watch me build an NServiceBus messaging system during this live coding session, mistakes and all. …",url:"https://go.particular.net/milanjovanovic/live-coding-your-first-nservicebus-system",logo:"https://docs.particular.net/favicon.ico",preview:"https://particular.net/images/webinars/training-wheels.jpg"}),s(o,{name:"NServiceBus monitoring demo • NServiceBus • Particular Docs",desc:"A self-contained demo solution that you can run to explore the monitoring features of the Particular Service Platform.",url:"https://go.particular.net/milanjovanovic/monitoring-demo",logo:"https://docs.particular.net/favicon.ico",preview:"https://docs.particular.net/preview-image/795e481c8e1e4fcc8adb382ff2b1b398/tutorials/monitoring-demo/index.png"}),s(i,c(l({title:"Messaging Made Easy With Azure Service Bus",desc:"If you're working in a distributed system, you need to be able to communicate between multiple services. There are a few ways that you can implement this. Depending on your chosen approach, you can either introduce tight coupling between your services or stay loosely coupled. Loose coupling is an important quality in a distributed system. It will allow you to evolve your services independently. So how do you implement loosely coupled communication between services?",link:"/milanjovanovic.tech/messaging-made-easy-with-azure-service-bus.md",logo:"https://milanjovanovic.tech/profile_favicon.png",background:"rgba(79,70,229,0,2)"})),null,16),s(i,c(l({title:"Implementing The Saga Pattern With Rebus And RabbitMQ",desc:"Designing long-lived processes in a distributed environment is an interesting engineering challenge. And a well known pattern for solving this problem is a Saga. A Saga is a sequence of local transactions, where each local transaction updates the Saga state and publishes a message triggering the next step in the Saga. Sagas come in two forms: Orchestrated Choreographed With an orchestrated Saga, there's a central component responsible for orchestrating the individual steps. In a choreographed Saga, processes work independently but coordinate with each other using events.",link:"/milanjovanovic.tech/implementing-the-saga-pattern-with-rebus-and-rabbitmq.md",logo:"https://milanjovanovic.tech/profile_favicon.png",background:"rgba(79,70,229,0,2)"})),null,16),s(i,c(l({title:"Orchestration vs Choreography",desc:"More than 63%+ of organizations said in a Dzone survey that they are adopting Microservices for some or all of their applications. As more businesses adopt the use of Microservice architectures, we as developers have to become more skilled with Microservices communication. Working with distributed systems is both fun and challenging at the same time. One of those challenges is designing effective communication between services. More centralization or less centralization? More coupling or less coupling? More control or less control? These are only a few questions you need to answer.",link:"/milanjovanovic.tech/orchestration-vs-choreography.md",logo:"https://milanjovanovic.tech/profile_favicon.png",background:"rgba(79,70,229,0,2)"})),null,16),W,M])}const q=g(k,[["render",T],["__file","getting-started-with-nservicebus-in-dotnet.html.vue"]]),P=JSON.parse('{"path":"/milanjovanovic.tech/getting-started-with-nservicebus-in-dotnet.html","title":"Getting Started With NServiceBus in .NET","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Getting Started With NServiceBus in .NET","description":"Article(s) > Getting Started With NServiceBus in .NET","icon":"iconfont icon-csharp","category":["C#","DotNet","Article(s)"],"tag":["blog","milanjovanovic.tech","cs","c#","csharp","dotnet"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Getting Started With NServiceBus in .NET"},{"property":"og:description","content":"Getting Started With NServiceBus in .NET"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/getting-started-with-nservicebus-in-dotnet.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/getting-started-with-nservicebus-in-dotnet.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Getting Started With NServiceBus in .NET"}],["meta",{"property":"og:description","content":"Article(s) > Getting Started With NServiceBus in .NET"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://milanjovanovic.tech/blog-covers/mnw_058.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://milanjovanovic.tech/blog-covers/mnw_058.png"}],["meta",{"name":"twitter:image:alt","content":"Getting Started With NServiceBus in .NET"}],["meta",{"property":"article:author","content":"Milan Jovanović"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"milanjovanovic.tech"}],["meta",{"property":"article:tag","content":"cs"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"csharp"}],["meta",{"property":"article:tag","content":"dotnet"}],["meta",{"property":"article:published_time","content":"2023-10-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Getting Started With NServiceBus in .NET\\",\\"image\\":[\\"https://milanjovanovic.tech/blog-covers/mnw_058.png\\"],\\"datePublished\\":\\"2023-10-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Milan Jovanović\\"}]}"]],"prev":"/programming/cs/articles/README.md","date":"2023-10-07T00:00:00.000Z","isOriginal":false,"author":"Milan Jovanović","cover":"https://milanjovanovic.tech/blog-covers/mnw_058.png"},"headers":[{"level":2,"title":"What is NServiceBus?","slug":"what-is-nservicebus","link":"#what-is-nservicebus","children":[]},{"level":2,"title":"Configuring the NServiceBus Endpoint","slug":"configuring-the-nservicebus-endpoint","link":"#configuring-the-nservicebus-endpoint","children":[]},{"level":2,"title":"Publishing Messages in NServiceBus","slug":"publishing-messages-in-nservicebus","link":"#publishing-messages-in-nservicebus","children":[]},{"level":2,"title":"Handling Messages With NServiceBus","slug":"handling-messages-with-nservicebus","link":"#handling-messages-with-nservicebus","children":[]},{"level":2,"title":"In Summary","slug":"in-summary","link":"#in-summary","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":5.26,"words":1579},"filePathRelative":"milanjovanovic.tech/getting-started-with-nservicebus-in-dotnet.md","localizedDate":"2023년 10월 7일","excerpt":"\\n","copyright":{"author":"Milan Jovanović"}}');export{q as comp,P as data};
