import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,b as e,t as d,e as t,n as u,g,w as o,d as a,f as s,r as l,o as v}from"./app-BgNevrm5.js";const f={},b={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},_={class:"table-of-contents"},w=e("hr",null,null,-1),I=e("p",null,"Modular monoliths are an architectural approach that's becoming very popular. They combine the benefits of modularity and monolithic design.",-1),M=e("p",null,"Modular monoliths try to solve the shortcomings of monolithic and microservice architectures.",-1),x=e("p",null,"One problem I often see with monolithic architectures is tight coupling between components.",-1),k=e("p",null,"This leads to dependencies between different parts of the system.",-1),D=e("strong",null,"communication patterns.",-1),j=s('<p>But one aspect you can&#39;t overlook is data isolation between modules.</p><p>Data isolation ensures that modules are independent and loosely coupled.</p><p>Today, I will show you four data isolation approaches for modular monoliths:</p><ul><li>Separate table</li><li>Separate schema</li><li>Separate database</li><li>Different persistence</li></ul><hr><h2 id="why-is-data-isolation-important" tabindex="-1"><a class="header-anchor" href="#why-is-data-isolation-important"><span>Why Is Data Isolation Important?</span></a></h2><p>Let&#39;s first understand why data isolation is important in a modular monolith architecture.</p><p>A modular monolith has strict rules for data integrity:</p><ul><li>Each module can only access its own tables</li><li>No sharing of tables or objects between modules</li><li>Joins are only allowed between tables of the same module</li></ul><p>Modules inside a modular monolith should be self-contained. Each module handles its own data. Other modules can access that data using the module&#39;s public API.</p><p>What are the benefits of this design?</p><p>Keeping modules isolated from each other promotes modularity and loose coupling. It makes it easier to introduce new changes to the system. There are fewer unintended side effects when components are loosely coupled.</p><p>If you are using a relational database, you can still maintain referential integrity. Removing the foreign keys when extracting tables is not a problem.</p><figure><img src="https://milanjovanovic.tech/blogs/mnw_067/monolith_components.png?imwidth=3840" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="level-1-separate-table" tabindex="-1"><a class="header-anchor" href="#level-1-separate-table"><span>Level 1 - Separate Table</span></a></h2><p>The simplest solution is to have no isolation at the database level. Tables for all modules live inside one database. It&#39;s not easy to determine which tables belong to which module.</p><p>I&#39;m only mentioning this approach for the sake of completeness.</p><p>But this approach works fine up to a particular application size.</p><p>However, the more tables you have, the harder it becomes to keep them isolated between modules.</p><p>You can improve this by adding logical isolation between tables.</p><figure><img src="https://milanjovanovic.tech/blogs/mnw_067/separate_table.png?imwidth=3840" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="level-2-separate-schema" tabindex="-1"><a class="header-anchor" href="#level-2-separate-schema"><span>Level 2 - Separate Schema</span></a></h2><p>Grouping related tables in the database is a way to introduce logical isolation. You can implement this using database schemas. Each module has a unique schema containing the module&#39;s tables.</p><p>Now, it becomes easy to distinguish which module contains which tables.</p>',26),S=e("strong",null,"multiple EF Core database contexts.",-1),T=e("strong",null,"architecture tests.",-1),L=e("p",null,"I always start with logical data isolation when building a modular monolith.",-1),A=e("p",null,"But what if this isn't enough?",-1),B=e("figure",null,[e("img",{src:"https://milanjovanovic.tech/blogs/mnw_067/separate_schema.png?imwidth=3840",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),P=e("hr",null,null,-1),R=e("h2",{id:"level-3-separate-database",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#level-3-separate-database"},[e("span",null,"Level 3 - Separate Database")])],-1),z=e("p",null,"The next data isolation level is moving each module's data into separate databases. This approach has more constraints than data isolation using schemas.",-1),E=e("p",null,"This is the way to go if you need strict data isolation rules between modules. But, the downside is more operational complexity. You have to manage infrastructure for multiple databases.",-1),C=e("strong",null,"extracting modules.",-1),N=s('<p>First, you move the tables of the module you want to extract into a separate database. This also forces you to solve any database coupling problems between your modules. You&#39;re ready to extract the module once you move the tables into a separate database.</p><p>Can we take the module data isolation further?</p><figure><img src="https://milanjovanovic.tech/blogs/mnw_067/separate_db.png?imwidth=3840" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="level-4-different-persistence" tabindex="-1"><a class="header-anchor" href="#level-4-different-persistence"><span>Level 4 - Different Persistence</span></a></h2><p>Who says you have to use the same database type for all modules?</p><p>I work with relational (SQL) databases most of the time. Relational databases are amazing and solve a wide range of problems. But sometimes, a document or graph database is a much better solution.</p><p>The idea here is similar: you&#39;re doing data isolation using separate databases.</p><p>However, you can introduce a different database type to solve specific problems. For example, you can use a relational database for one module. And a graph or column-store database for another module. You also have to maintain different persistence models in your application.</p><p>This could be a worthwhile tradeoff for your use case. But it takes careful planning.</p><figure><img src="https://milanjovanovic.tech/blogs/mnw_067/separate_db_type.png?imwidth=3840" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>',13),Y=e("strong",null,"extract modules and move to microservices.",-1),J=s("<p>Modules have to comply with a few rules. They can only access their own tables. They can&#39;t share tables with other modules. And they can&#39;t directly query tables of other modules. These rules help to enforce data isolation between modules.</p><p>But you still have to implement data isolation at the database level.</p><p>There are four options you can choose from:</p><ul><li>Separate table</li><li>Separate schema</li><li>Separate database</li><li>Different persistence</li></ul><p>I always go for logical isolation using schemas. It&#39;s easy to implement and helps me understand my boundaries better. Depending on the requirements, I can introduce separate databases later.</p><p>Hope this was helpful.</p><p>See you next week.</p>",7);function V(r,W){const c=l("VPCard"),i=l("router-link"),h=l("SiteInfo"),n=l("RouteLink");return v(),m("div",null,[e("h1",b,[e("a",y,[e("span",null,d(r.$frontmatter.title)+" 관련",1)])]),t(c,u(g({title:"C# > Article(s)",desc:"Article(s)",link:"/programming/cs/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),e("nav",_,[e("ul",null,[e("li",null,[t(i,{to:"#why-is-data-isolation-important"},{default:o(()=>[a("Why Is Data Isolation Important?")]),_:1})]),e("li",null,[t(i,{to:"#level-1-separate-table"},{default:o(()=>[a("Level 1 - Separate Table")]),_:1})]),e("li",null,[t(i,{to:"#level-2-separate-schema"},{default:o(()=>[a("Level 2 - Separate Schema")]),_:1})]),e("li",null,[t(i,{to:"#level-3-separate-database"},{default:o(()=>[a("Level 3 - Separate Database")]),_:1})]),e("li",null,[t(i,{to:"#level-4-different-persistence"},{default:o(()=>[a("Level 4 - Different Persistence")]),_:1})]),e("li",null,[t(i,{to:"#summary"},{default:o(()=>[a("Summary")]),_:1})])])]),w,t(h,{name:"Modular Monolith Data Isolation",desc:"Modular monoliths are an architectural approach that's becoming very popular. They combine the benefits of modularity and monolithic design. Data isolation ensures that modules are independent and loosely coupled. Today, I will show you four data isolation approaches for modular monoliths",url:"https://milanjovanovic.tech/blog/modular-monolith-data-isolation/",logo:"https://milanjovanovic.tech/profile_favicon.png",preview:"https://milanjovanovic.tech/blog-covers/mnw_067.png"}),I,M,x,k,e("p",null,[a("Modular monoliths enforce better architectural practices with well-defined module boundaries and "),t(n,{to:"/milanjovanovic.tech/modular-monolith-communication-patterns.html"},{default:o(()=>[D]),_:1})]),j,e("p",null,[a("An easy way to implement this is using "),t(n,{to:"/milanjovanovic.tech/using-multiple-ef-core-dbcontext-in-single-application.html"},{default:o(()=>[S]),_:1})]),e("p",null,[a("You can also introduce rules to prevent querying data from other modules. For example, you could implement this using "),t(n,{to:"/milanjovanovic.tech/enforcing-software-architecture-with-architecture-tests.html"},{default:o(()=>[T]),_:1})]),L,A,B,P,R,z,E,e("p",null,[a("However, this is an excellent step toward "),t(n,{to:"/milanjovanovic.tech/monolith-to-microservices-how-a-modular-monolith-helps.html"},{default:o(()=>[C]),_:1})]),N,e("p",null,[a("Modular monoliths are excellent if you don't need microservices right away. You develop your application as a monolith with distinct boundaries inside the system. You still have the flexibility to "),t(n,{to:"/milanjovanovic.tech/monolith-to-microservices-how-a-modular-monolith-helps.html"},{default:o(()=>[Y]),_:1}),a(" But you have faster development speed with a modular monolith.")]),J])}const H=p(f,[["render",V],["__file","modular-monolith-data-isolation.html.vue"]]),K=JSON.parse('{"path":"/milanjovanovic.tech/modular-monolith-data-isolation.html","title":"Modular Monolith Data Isolation","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Modular Monolith Data Isolation","description":"Article(s) > Modular Monolith Data Isolation","icon":"iconfont icon-csharp","category":["C#","DotNet","Article(s)"],"tag":["blog","milanjovanovic.tech","cs","c#","csharp","dotnet"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Modular Monolith Data Isolation"},{"property":"og:description","content":"Modular Monolith Data Isolation"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/modular-monolith-data-isolation.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/milanjovanovic.tech/modular-monolith-data-isolation.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Modular Monolith Data Isolation"}],["meta",{"property":"og:description","content":"Article(s) > Modular Monolith Data Isolation"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://milanjovanovic.tech/blog-covers/mnw_067.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://milanjovanovic.tech/blog-covers/mnw_067.png"}],["meta",{"name":"twitter:image:alt","content":"Modular Monolith Data Isolation"}],["meta",{"property":"article:author","content":"Milan Jovanović"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"milanjovanovic.tech"}],["meta",{"property":"article:tag","content":"cs"}],["meta",{"property":"article:tag","content":"c#"}],["meta",{"property":"article:tag","content":"csharp"}],["meta",{"property":"article:tag","content":"dotnet"}],["meta",{"property":"article:published_time","content":"2023-12-09T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Modular Monolith Data Isolation\\",\\"image\\":[\\"https://milanjovanovic.tech/blogs/mnw_067/monolith_components.png?imwidth=3840\\",\\"https://milanjovanovic.tech/blogs/mnw_067/separate_table.png?imwidth=3840\\",\\"https://milanjovanovic.tech/blogs/mnw_067/separate_schema.png?imwidth=3840\\",\\"https://milanjovanovic.tech/blogs/mnw_067/separate_db.png?imwidth=3840\\",\\"https://milanjovanovic.tech/blogs/mnw_067/separate_db_type.png?imwidth=3840\\"],\\"datePublished\\":\\"2023-12-09T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Milan Jovanović\\"}]}"]],"prev":"/programming/cs/articles/README.md","date":"2023-12-09T00:00:00.000Z","isOriginal":false,"author":"Milan Jovanović","cover":"https://milanjovanovic.tech/blog-covers/mnw_067.png"},"headers":[{"level":2,"title":"Why Is Data Isolation Important?","slug":"why-is-data-isolation-important","link":"#why-is-data-isolation-important","children":[]},{"level":2,"title":"Level 1 - Separate Table","slug":"level-1-separate-table","link":"#level-1-separate-table","children":[]},{"level":2,"title":"Level 2 - Separate Schema","slug":"level-2-separate-schema","link":"#level-2-separate-schema","children":[]},{"level":2,"title":"Level 3 - Separate Database","slug":"level-3-separate-database","link":"#level-3-separate-database","children":[]},{"level":2,"title":"Level 4 - Different Persistence","slug":"level-4-different-persistence","link":"#level-4-different-persistence","children":[]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.5,"words":1051},"filePathRelative":"milanjovanovic.tech/modular-monolith-data-isolation.md","localizedDate":"2023년 12월 9일","excerpt":"\\n","copyright":{"author":"Milan Jovanović"}}');export{H as comp,K as data};
