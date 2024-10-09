import{_ as g}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,b as n,t as m,e,n as u,g as d,w as s,d as a,f as c,r as p,o as f}from"./app-BgNevrm5.js";const v="/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/azure-app-registration.png",y="/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/upload-certificate.png",b="/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/create-key-vault-basics.png",z="/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/add-access-policy.png",w="/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/add-secrets.png",A="/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/production-title.png",_={},C={id:"frontmatter-title-관련",tabindex:"-1"},S={class:"header-anchor",href:"#frontmatter-title-관련"},V={class:"table-of-contents"},K=n("hr",null,null,-1),T=n("p",null,"These methods are not suited for production because the values we keep that way are unencrypted and can be easily read if the security is compromised.",-1),x={class:"hint-container info"},N=n("p",{class:"hint-container-title"},"Info",-1),I={href:"https://github.com/CodeMazeBlog/aspnet-core-configuration",target:"_blank",rel:"noopener noreferrer"},B=n("code",null,"CodeMazeBlog/aspnet-core-configuration",-1),q={href:"https://github.com/CodeMazeBlog/aspnet-core-configuration/tree/securing-data-locally",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"securing-data-locally",-1),E=n("code",null,"CodeMazeBlog/aspnet-core-configuration",-1),D={href:"https://github.com/CodeMazeBlog/aspnet-core-configuration/tree/azure-key-vault",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"azure-key-vault",-1),O=n("code",null,"CodeMazeBlog/aspnet-core-configuration",-1),R=n("p",null,"Let’s dive in.",-1),F=n("hr",null,null,-1),L=n("h2",{id:"sintroduction-to-azure-key-vault",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sintroduction-to-azure-key-vault"},[n("span",null,"sIntroduction to Azure Key Vault")])],-1),H=n("p",null,[a("One of the ways we can keep our secrets secret is by using the Azure Key Vault which is a "),n("strong",null,"cloud-based service that keeps cryptographic keys and secrets"),a(" that our applications and services use. In simple terms, it offers a safe way to store the key-value pairs that we use in our applications.")],-1),j=c('<div class="hint-container note"><p class="hint-container-title">Note</p><p>In order to use the Azure Key Vault, <strong>you must have an active Microsoft Azure subscription</strong>.</p></div><p>Microsoft Azure Key Vault configuration provider is the one we’ll use this time to migrate our configuration values to the cloud, and later on, connect to the vault and read those values.</p><p>The procedure is a bit different for Azure-hosted apps and for non-azure-hosted apps, but we’ll focus on the latter because it’s more complicated. Microsoft Azure Key vault offers an easier way for Azure-hosted apps.</p><p>There are several steps we need to do in order to use the Azure Key Vault with non-Azure-hosted apps:</p><ul><li>Create Azure Subscription (we won’t talk about this one, we assume you have one)</li><li>Register Azure AD Application</li><li>Create a Certificate and Upload it to Azure AD</li><li>Create the Azure Key Vault</li><li>Import our Existing Secrets</li><li>Connect to the Key Vault through our ASP.NET Core Application</li></ul><p>Let’s start by laying some foundation first.</p><hr><h2 id="connecting-to-azure-key-vault" tabindex="-1"><a class="header-anchor" href="#connecting-to-azure-key-vault"><span>Connecting to Azure Key Vault</span></a></h2><p>In order to connect to our Azure Key Vault, we’ll need to register an Azure app. To do that, head on to “Azure Active Directory”, then “App Registration” and click on “New Registration”.</p><p>The dialog should look like this:</p><figure><img src="'+v+'" alt="azure app registration" tabindex="0" loading="lazy"><figcaption>azure app registration</figcaption></figure><p>Just give your app a decent name, and click “Register”. Once the app creation is over, you can find it in the apps list. Click on it, and check out the <strong>“Application (client) ID”. Write it down</strong>, since we’re going to need it later.</p><p>Next, since we want to connect to the app securely, we need to create and upload a certificate.</p><p>Certificate creation has a few steps, and we recommend using OpenSSL to do it since it has all the tools we need.</p><h3 id="creating-a-certificate-with-openssl" tabindex="-1"><a class="header-anchor" href="#creating-a-certificate-with-openssl"><span>Creating a certificate with OpenSSL</span></a></h3>',15),W={href:"https://slproweb.com/products/Win32OpenSSL.html",target:"_blank",rel:"noopener noreferrer"},U=n("li",null,[a("Create a certificate by typing:"),n("br"),n("code",null,"openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365")],-1),X=n("li",null,[a("Create a .pfx file from the key and certificate files:"),n("br"),n("code",null,"openssl pkcs12 -export -out domain.name.pfx -inkey domain.name.key -in domain.name.crt")],-1),G=n("li",null,"Install pfx locally (double click and go through the wizard)",-1),Z=n("li",null,"Upload cert.pem to Azure AD",-1),J=c('<p>To complete step 5, go to the “Certificates &amp; secrets” in your app, and then “Upload certificate”.</p><figure><img src="'+y+'" alt="upload certificate" tabindex="0" loading="lazy"><figcaption>upload certificate</figcaption></figure><p><strong>Write down the certificate thumbprint</strong> once the upload is finished.</p><h3 id="creating-azure-key-vault" tabindex="-1"><a class="header-anchor" href="#creating-azure-key-vault"><span>Creating Azure Key Vault</span></a></h3><p>Now we can move on to creating our vault. Go to the Azure portal home and find the “Key vaults” service. Then go to “Add” and fill in the basic stuff first:</p><figure><img src="'+b+'" alt="create azure key vault basics" tabindex="0" loading="lazy"><figcaption>create azure key vault basics</figcaption></figure><p>You need to fill in subscription, resource group, name, region, and pricing tier.</p><p>After that, navigate to the second tab, Access policy. Here’s where we need to add the app that we’ve created previously. Select the “Secret Management” template, and from the “Secret permission” dropdown, select “Get” and “List” permissions.</p><figure><img src="'+z+'" alt="add azure key vault access policy" tabindex="0" loading="lazy"><figcaption>add azure key vault access policy</figcaption></figure><p>Since we’ll add our secrets manually, make sure to add your user as a principal too, and give it permissions to set and delete secrets.</p><p>That’s it, move on to the “Review + create” tab and click on the “Create” button.</p><p>Once the process is finished head over to the key vault you’ve created and <strong>write down the “DNS Name”</strong>.</p><p>At this point you should have three pieces of information:</p><ul><li>Application ID</li><li>Certificate Thumbprint</li><li>DNS Name</li></ul><p>Now we can add our secrets to the vault.</p><h3 id="adding-secrets-to-azure-key-vault" tabindex="-1"><a class="header-anchor" href="#adding-secrets-to-azure-key-vault"><span>Adding Secrets to Azure Key Vault</span></a></h3><p>Now we can finally add our secrets.</p><p>Head over to the “Secrets” tab to the left, and add some secrets:</p><figure><img src="'+w+`" alt="add secrets" tabindex="0" loading="lazy"><figcaption>add secrets</figcaption></figure><p>The process is pretty much straightforward. If you have a problem viewing or adding secrets (grayed out generate/import), double-check your access policies, and click refresh.</p><p>As you can see, we’ve added some secrets we’ve used so far. We’ve flattened the structure by using double dash <code>--</code>, and we’ve changed the “WelcomeMessage” to “Welcome to the ProjectConfigurationDemo Home Page (Azure)” so we can easily see the change.</p><p>Now let’s go back to the code and connect our application to the key vault.</p><hr><h2 id="adding-the-vault-to-our-application" tabindex="-1"><a class="header-anchor" href="#adding-the-vault-to-our-application"><span>Adding the Vault to our Application</span></a></h2><p>In order to connect our application, we need to extend the configuration a bit.</p><p>First, we need to install a NuGet package to support our KeyVault integration:</p><div class="language-pwsh line-numbers-mode" data-highlighter="prismjs" data-ext="pwsh" data-title="pwsh"><pre><code><span class="line">Install-Package Microsoft.Extensions.Configuration.AzureKeyVault -Version 3.1.7</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After that, we need to add the values we’ve written down while creating the vault in our appsettings.json:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token property">&quot;Azure&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;ApplicationId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;85cce826-78e7-405e-8c32-301f71e1ad89&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;CertificateThumb&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6491383027629A9F43F6CB681F299D88293785E0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;KeyVault&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;DNS&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://codemazekeyvault.vault.azure.net/&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, we need to connect to add the Key Vault as a source in the <code>Program</code> class:</p><div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IHostBuilder</span> <span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&lt;</span></span>
<span class="line">    Host<span class="token punctuation">.</span><span class="token function">CreateDefaultBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">ConfigureWebHostDefaults</span><span class="token punctuation">(</span>webBuilder <span class="token operator">=</span><span class="token operator">&lt;</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            webBuilder<span class="token punctuation">.</span>UseStartup<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>Startup<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">ConfigureAppConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">(</span>hostingContext<span class="token punctuation">,</span> configBuilder<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&lt;</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token class-name"><span class="token keyword">var</span></span> builtConfig <span class="token operator">=</span> configBuilder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">X509Store</span><span class="token punctuation">(</span>StoreLocation<span class="token punctuation">.</span>CurrentUser<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">                store<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>OpenFlags<span class="token punctuation">.</span>ReadOnly<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token class-name"><span class="token keyword">var</span></span> certs <span class="token operator">=</span> store<span class="token punctuation">.</span>Certificates</span>
<span class="line">                    <span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span>X509FindType<span class="token punctuation">.</span>FindByThumbprint<span class="token punctuation">,</span> builtConfig<span class="token punctuation">[</span><span class="token string">&quot;Azure:CertificateThumb&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                configBuilder<span class="token punctuation">.</span><span class="token function">AddAzureKeyVault</span><span class="token punctuation">(</span></span>
<span class="line">                    builtConfig<span class="token punctuation">[</span><span class="token string">&quot;Azure:KeyVault:DNS&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                    builtConfig<span class="token punctuation">[</span><span class="token string">&quot;Azure:ApplicationId&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                    certs<span class="token punctuation">.</span>OfType<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>X509Certificate2<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                store<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a standard way of adding an Azure Key Vault by using X509 certificate.</p><p>And since we’re adding the vault as the last configuration source, it will override all the previous ones like user secrets or environment variables.</p><p>Let’s see the results of our work.</p><hr><h2 id="running-the-application" tabindex="-1"><a class="header-anchor" href="#running-the-application"><span>Running the Application</span></a></h2><p>Now if we run the application, we can clearly see that our title has changed:</p><figure><img src="`+A+'" alt="production title" tabindex="0" loading="lazy"><figcaption>production title</figcaption></figure><p>Our title now shows (Azure) at the end, so that means we’ve read the configuration from the key vault successfully.</p>',39),Y=c(`<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs" data-title="cs"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">IHostBuilder</span> <span class="token function">CreateHostBuilder</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&lt;</span></span>
<span class="line">  Host<span class="token punctuation">.</span><span class="token function">CreateDefaultBuilder</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">ConfigureWebHostDefaults</span><span class="token punctuation">(</span>webBuilder <span class="token operator">=</span><span class="token operator">&lt;</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      webBuilder<span class="token punctuation">.</span>UseStartup<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>Startup<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">ConfigureAppConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> builder<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&lt;</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>HostingEnvironment<span class="token punctuation">.</span><span class="token function">IsProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name"><span class="token keyword">var</span></span> builtConfig <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">X509Store</span><span class="token punctuation">(</span>StoreLocation<span class="token punctuation">.</span>CurrentUser<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          store<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>OpenFlags<span class="token punctuation">.</span>ReadOnly<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token class-name"><span class="token keyword">var</span></span> certs <span class="token operator">=</span> store<span class="token punctuation">.</span>Certificates</span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span>X509FindType<span class="token punctuation">.</span>FindByThumbprint<span class="token punctuation">,</span></span>
<span class="line">              builtConfig<span class="token punctuation">[</span><span class="token string">&quot;Azure:CertificateThumb&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">          builder<span class="token punctuation">.</span><span class="token function">AddAzureKeyVault</span><span class="token punctuation">(</span></span>
<span class="line">            builtConfig<span class="token punctuation">[</span><span class="token string">&quot;Azure:KeyVault:DNS&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            builtConfig<span class="token punctuation">[</span><span class="token string">&quot;Azure:ApplicationId&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            certs<span class="token punctuation">.</span>OfType<span class="token operator">&amp;</span>lt<span class="token punctuation">;</span>X509Certificate2<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Single</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">          store<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),$=n("p",null,"That’s it, awesome isn’t it?",-1),Q=n("hr",null,null,-1),nn=n("h2",{id:"sconclusion",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sconclusion"},[n("span",null,"sConclusion")])],-1),an=n("p",null,"In this article, we’ve learned how to create an Azure Key Vault to store our secrets for a production environment. We’ve also learned how to connect to the vault from our application and how to use key vault just when running the application in production.",-1),en={href:"https://code-maze.com/net-core-series/#configuration",target:"_blank",rel:"noopener noreferrer"};function sn(h,tn){const l=p("VPCard"),t=p("router-link"),r=p("SiteInfo"),i=p("RouteLink"),o=p("FontIcon");return f(),k("div",null,[n("h1",C,[n("a",S,[n("span",null,m(h.$frontmatter.title)+" 관련",1)])]),e(l,u(d({title:"Azure > Article(s)",desc:"Article(s)",link:"/devops/azure/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),e(l,u(d({title:"C# > Article(s)",desc:"Article(s)",link:"/programming/cs/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),n("nav",V,[n("ul",null,[n("li",null,[e(t,{to:"#sintroduction-to-azure-key-vault"},{default:s(()=>[a("sIntroduction to Azure Key Vault")]),_:1})]),n("li",null,[e(t,{to:"#connecting-to-azure-key-vault"},{default:s(()=>[a("Connecting to Azure Key Vault")]),_:1}),n("ul",null,[n("li",null,[e(t,{to:"#creating-a-certificate-with-openssl"},{default:s(()=>[a("Creating a certificate with OpenSSL")]),_:1})]),n("li",null,[e(t,{to:"#creating-azure-key-vault"},{default:s(()=>[a("Creating Azure Key Vault")]),_:1})]),n("li",null,[e(t,{to:"#adding-secrets-to-azure-key-vault"},{default:s(()=>[a("Adding Secrets to Azure Key Vault")]),_:1})])])]),n("li",null,[e(t,{to:"#adding-the-vault-to-our-application"},{default:s(()=>[a("Adding the Vault to our Application")]),_:1})]),n("li",null,[e(t,{to:"#running-the-application"},{default:s(()=>[a("Running the Application")]),_:1})]),n("li",null,[e(t,{to:"#sconclusion"},{default:s(()=>[a("sConclusion")]),_:1})])])]),K,e(r,{name:"ASP.NET Core Configuration – Azure Key Vault",desc:"In this article, we're going to talk about how to protect our sensitive configuration data in the production environment with Azure Key Vault",url:"https://code-maze.com/aspnet-configuration-azure-key-vault/",logo:"/assets/image/code-maze.com/favicon.png",preview:"/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/banner.png"}),n("p",null,[a("In this article, we’re going to talk about how to protect our sensitive configuration data in the production environment with Azure Key Vault. Previously we’ve talked about the "),e(i,{to:"/code-maze.com/aspnet-configuration-securing-sensitive-data.html"},{default:s(()=>[a("Secret Manager and environment variables")]),_:1}),a(" which we can use to protect our data while in development.")]),T,n("div",x,[N,n("p",null,[a("The source code for this article can be found on the "),n("a",I,[a("ASP.NET Core Configuration repo on GitHub ("),e(o,{icon:"iconfont icon-github"}),B,a(")")]),a(". If you wish to follow along, use the "),n("a",q,[e(o,{icon:"fas fa-code-branch"}),P,a(" ("),e(o,{icon:"iconfont icon-github"}),E,a(")")]),a(" branch. To check out the finished source code, check out the "),n("a",D,[e(o,{icon:"fas fa-code-branch"}),M,a(" ("),e(o,{icon:"iconfont icon-github"}),O,a(")")]),a(" branch.")]),e(r,{name:"CodeMazeBlog/aspnet-core-configuration",desc:"This repo contains the source code for the ASP.NET Core Configuration Series of articles.",url:"https://github.com/CodeMazeBlog/aspnet-core-configuration",logo:"https://avatars.githubusercontent.com/u/29179238?v=4",preview:"https://opengraph.githubassets.com/e80292ed715f08922effe73e0902ccf220294b7d0a8e5c5759c861254e9e4e0f/CodeMazeBlog/aspnet-core-configuration"})]),R,F,L,H,n("p",null,[a("It uses configuration data flattening as we’ve seen with "),e(i,{to:"/code-maze.com/aspnet-configuration-securing-sensitive-data.html#secretmanager"},{default:s(()=>[a("user secrets")]),_:1}),a(" and "),e(i,{to:"/code-maze.com/aspnet-configuration-securing-sensitive-data.html#environmentvariables"},{default:s(()=>[a("environment variables")]),_:1}),a(".")]),j,n("ol",null,[n("li",null,[a("If you don’t have OpenSSL on Windows "),n("a",W,[e(o,{icon:"fas fa-globe"}),a("download it")]),a(" and - it")]),U,X,G,Z]),J,n("p",null,[a("In order to make this solution even better, we restrict our application to only add the key vault in the "),e(i,{to:"/code-maze.com/multiple-environments-in-asp-net-core.html"},{default:s(()=>[a("production environment")]),_:1}),a(":")]),Y,n("p",null,[a("Now when we run our application locally, we’ll use the user secrets defined in secrets.json, and we’ll use Azure Key Vaults secrets in the "),e(i,{to:"/code-maze.com/multiple-environments-in-asp-net-core.html"},{default:s(()=>[a("production environment")]),_:1}),a(".")]),$,Q,nn,an,n("p",null,[a("This part wraps up our ASP.NET Core configuration series. You can find other parts of this series on the "),n("a",en,[e(o,{icon:"fas fa-globe"}),a("ASP.NET Core Web API page")]),a(".")])])}const cn=g(_,[["render",sn],["__file","aspnet-configuration-azure-key-vault.html.vue"]]),ln=JSON.parse('{"path":"/code-maze.com/aspnet-configuration-azure-key-vault.html","title":"ASP.NET Core Configuration – Azure Key Vault","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"ASP.NET Core Configuration – Azure Key Vault","description":"Article(s) > ASP.NET Core Configuration – Azure Key Vault","icon":"iconfont icon-microsoftazure","category":["DevOps","Microsoft","Azure","C#","Article(s)"],"tag":["blog","code-maze.com","devops","microsoft","azure","cs","c#","csharp"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > ASP.NET Core Configuration – Azure Key Vault"},{"property":"og:description","content":"ASP.NET Core Configuration – Azure Key Vault"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/code-maze.com/aspnet-configuration-azure-key-vault.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/code-maze.com/aspnet-configuration-azure-key-vault.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"ASP.NET Core Configuration – Azure Key Vault"}],["meta",{"property":"og:description","content":"Article(s) > ASP.NET Core Configuration – Azure Key Vault"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://chanhi2000.github.io/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/banner.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://chanhi2000.github.io/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/banner.png"}],["meta",{"name":"twitter:image:alt","content":"ASP.NET Core Configuration – Azure Key Vault"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"code-maze.com"}],["meta",{"property":"article:tag","content":"devops"}],["meta",{"property":"article:tag","content":"microsoft"}],["meta",{"property":"article:tag","content":"azure"}],["meta",{"property":"article:tag","content":"cs"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"csharp"}],["meta",{"property":"article:published_time","content":"2021-12-27T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ASP.NET Core Configuration – Azure Key Vault\\",\\"image\\":[\\"https://chanhi2000.github.io/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/azure-app-registration.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/upload-certificate.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/create-key-vault-basics.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/add-access-policy.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/add-secrets.png\\",\\"https://chanhi2000.github.io/bookshelf/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/production-title.png\\"],\\"datePublished\\":\\"2021-12-27T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/devops/azure/articles/README.md","date":"2021-12-27T00:00:00.000Z","isOriginal":false,"cover":"/assets/image/code-maze.com/aspnet-configuration-azure-key-vault/banner.png"},"headers":[{"level":2,"title":"sIntroduction to Azure Key Vault","slug":"sintroduction-to-azure-key-vault","link":"#sintroduction-to-azure-key-vault","children":[]},{"level":2,"title":"Connecting to Azure Key Vault","slug":"connecting-to-azure-key-vault","link":"#connecting-to-azure-key-vault","children":[{"level":3,"title":"Creating a certificate with OpenSSL","slug":"creating-a-certificate-with-openssl","link":"#creating-a-certificate-with-openssl","children":[]},{"level":3,"title":"Creating Azure Key Vault","slug":"creating-azure-key-vault","link":"#creating-azure-key-vault","children":[]},{"level":3,"title":"Adding Secrets to Azure Key Vault","slug":"adding-secrets-to-azure-key-vault","link":"#adding-secrets-to-azure-key-vault","children":[]}]},{"level":2,"title":"Adding the Vault to our Application","slug":"adding-the-vault-to-our-application","link":"#adding-the-vault-to-our-application","children":[]},{"level":2,"title":"Running the Application","slug":"running-the-application","link":"#running-the-application","children":[]},{"level":2,"title":"sConclusion","slug":"sconclusion","link":"#sconclusion","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":5.65,"words":1694},"filePathRelative":"code-maze.com/aspnet-configuration-azure-key-vault.md","localizedDate":"2021년 12월 27일","excerpt":"\\n"}');export{cn as comp,ln as data};
