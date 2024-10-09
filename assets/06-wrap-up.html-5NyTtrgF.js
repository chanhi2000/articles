import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,b as e,t as d,e as t,n,g as r,w as s,d as o,f as g,r as l,o as m}from"./app-BgNevrm5.js";const w={},y={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},b=e("hr",null,null,-1),v=e("p",null,"As your Swift skill increases, I hope you're starting to feel the balance of these projects move away from explaining the basics and toward presenting and dissecting code.",-1),_=e("p",null,[o("In this project you learned how to download JSON using Swift’s Data type, then use the Codable protocol to convert that data into Swift objects we defined. Working with JSON is something you're going to be doing time and time again in your Swift career, and you've cracked it in about an hour of work – while also learning about "),e("code",null,"UITabBarController"),o(", "),e("code",null,"UIStoryboard"),o(", and more.")],-1),S=e("p",null,"Good job!",-1),x=e("hr",null,null,-1),I=e("h2",{id:"review-what-you-learned",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#review-what-you-learned"},[e("span",null,"Review what you learned")])],-1),W=e("p",null,"Anyone can sit through a tutorial, but it takes actual work to remember what was taught. It’s my job to make sure you take as much from these tutorials as possible, so I’ve prepared a short review to help you check your learning.",-1),O=g('<hr><h2 id="challenge" tabindex="-1"><a class="header-anchor" href="#challenge"><span>Challenge</span></a></h2><p>One of the best ways to learn is to write your own code as often as possible, so here are three ways you should try extending this app to make sure you fully understand what’s going on:</p><ol><li>Add a Credits button to the top-right corner using <code>UIBarButtonItem</code>. When this is tapped, show an alert telling users the data comes from the We The People API of the Whitehouse.</li><li>Let users filter the petitions they see. This involves creating a second array of filtered items that contains only petitions matching a string the user entered. Use a <code>UIAlertController</code> with a text field to let them enter that string. This is a tough one, so I’ve included some hints below if you get stuck.</li><li>Experiment with the HTML – this isn’t a HTML or CSS tutorial, but you can find lots of resources online to give you enough knowledge to tinker with the layout a little.</li></ol><hr><h2 id="hints" tabindex="-1"><a class="header-anchor" href="#hints"><span>Hints</span></a></h2><p>It is <em>vital</em> to your learning that you try the challenges above yourself, and not just for a handful of minutes before you give up.</p><p>Every time you try something wrong, you learn that it’s wrong and you’ll remember that it’s wrong. By the time you find the <em>correct</em> solution, you’ll remember it much more thoroughly, while also remembering a lot of the wrong turns you took.</p><p>This is what I mean by “there is no learning without struggle”: if something comes easily to you, it can go just as easily. But when you have to really mentally fight for something, it will stick much longer.</p><p>But if you’ve already worked hard at the challenges above and are still struggling to implement them, I’m going to write some hints below that should guide you to the correct answer.</p><p><strong>If you ignore me and read these hints without having spent at least 30 minutes trying the challenges above, the only person you’re cheating is yourself.</strong></p><p>Still here? OK. The second challenge here is to let users filter the petitions they see. To solve this you need to do a number of things:</p><ol><li>Have one property to store all petitions, and one to store filtered petitions. This means the user can filter the petitions several times and you don’t have to keep redownloading your JSON.</li><li>At first your filtered petitions array will be the same as the main petitions array, so just assign one to the other when your data is ready.</li><li>Your table view should load all its data from the filtered petitions array.</li><li>You’ll need a bar button item to show an alert controller that the user can type into.</li><li>Once that’s done, go through all the items in your petitions array, adding any you want to the filtered petition.</li></ol><p>The important part here is the last one: how do you decide whether a petition matches the user’s search? One option is to use <code>contains()</code> to check whether the petition title or body text contains the user’s search string – try it and see how you get on!</p>',14);function T(h,A){const i=l("VPCard"),a=l("router-link"),c=l("VidStack");return m(),p("div",null,[e("h1",y,[e("a",f,[e("span",null,d(h.$frontmatter.title)+" 관련",1)])]),t(i,n(r({title:"Hacking with iOS – learn to code iPhone and iPad apps with free Swift tutorials",desc:"Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",link:"/hackingwithswift.com/read/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),e("nav",k,[e("ul",null,[e("li",null,[t(a,{to:"#review-what-you-learned"},{default:s(()=>[o("Review what you learned")]),_:1})]),e("li",null,[t(a,{to:"#challenge"},{default:s(()=>[o("Challenge")]),_:1})]),e("li",null,[t(a,{to:"#hints"},{default:s(()=>[o("Hints")]),_:1})])])]),b,t(i,n(r({title:"Wrap up | Hacking with iOS",desc:"Wrap up",link:"https://hackingwithswift.com/read/7/6/wrap-up",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),t(c,{src:"youtube/utUpNqglZGs"}),v,_,S,x,I,W,t(i,n(r({title:"Review – Project 7: Whitehouse Petitions – Hacking with Swift",desc:"Interactive tests that help gauge your progress learning Swift",link:"https://hackingwithswift.com/review/hws/project-7-whitehouse-petitions",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),O])}const P=u(w,[["render",T],["__file","06-wrap-up.html.vue"]]),B=JSON.parse('{"path":"/hackingwithswift.com/read/07/06-wrap-up.html","title":"Wrap up","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Wrap up","description":"Article(s) > Wrap up","category":["Swift","iOS","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore","ios"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > Wrap up"},{"property":"og:description","content":"Wrap up"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/07/06-wrap-up.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/read/07/06-wrap-up.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"Wrap up"}],["meta",{"property":"og:description","content":"Article(s) > Wrap up"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:tag","content":"ios"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Wrap up\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]],"next":"/hackingwithswift.com/read/08/overview.md","isOriginal":false},"headers":[{"level":2,"title":"Review what you learned","slug":"review-what-you-learned","link":"#review-what-you-learned","children":[]},{"level":2,"title":"Challenge","slug":"challenge","link":"#challenge","children":[]},{"level":2,"title":"Hints","slug":"hints","link":"#hints","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":2.78,"words":834},"filePathRelative":"hackingwithswift.com/read/07/06-wrap-up.md","excerpt":"\\n"}');export{P as comp,B as data};
