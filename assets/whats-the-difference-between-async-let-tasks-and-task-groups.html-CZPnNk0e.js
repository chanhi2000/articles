import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,t as i,e as a,n as o,g as s,f as l,r as d,o as h}from"./app-BgNevrm5.js";const u={},p={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},g=e("nav",{class:"table-of-contents"},[e("ul")],-1),k=e("hr",null,null,-1),m=l("<blockquote><p>Updated for Xcode 15</p></blockquote><p>Swift’s <code>async let</code>, <code>Task</code>, and task groups all solve a similar problem: they allow us to create concurrency in our code so the system is able to run them efficiently. Beyond that, the way they work is quite different, and which you’ll choose depends on your exact scenario.</p><p>To help you understand how they differ, and provide some guidance on where each one is a good idea, I want to walk through the key behaviors of each of them.</p><p>First, <code>async let</code> and <code>Task</code> are designed to create specific, individual pieces of work, whereas task groups are designed to run multiple pieces of work at the same time and gather the results. As a result, <code>async let</code> and <code>Task</code> have no way to express a dynamic amount of work that should run in parallel.</p><p>For example, if you had an array of URLs and wanted to fetch them all in parallel, convert them into arrays of weather readings, then average them to a single <code>Double</code>, task groups would be a great choice because you won’t know ahead of time how many URLs are in your array. Trying to write this using <code>async let</code> or <code>Task</code> just wouldn’t work, because you’d have to hard-code the exact number of <code>async let</code> lines rather than just loop over an array.</p><p>Second, task groups automatically let us process results from child tasks in the order they complete, rather than in an order we specify. For example, if we wanted to fetch five pieces of data, task groups allow us to use <code>group.next()</code> to read whichever of the five comes back first, whereas using <code>async let</code> and <code>Task</code> would require us to await values in a specific, fixed order.</p><p>That alone is a helpful feature of task groups, but in some situations it goes from helpful to <em>crucial</em>. For example, if you have three possible servers for some data and want to use whichever one responds fastest, task groups are perfect – you can use <code>addTask()</code> once for each server, then call <code>next()</code> only once to read whichever one responded fastest.</p><p>Third, although all three forms of concurrency will automatically be marked as cancelled if their parent task is cancelled, only <code>Task</code> and task group can be cancelled directly, using <code>cancel()</code> and <code>cancelAll()</code> respectively. There is no equivalent for <code>async let</code>.</p><p>Fourth, because <code>async let</code> doesn’t give us a handle to the underlying task it creates for us, it’s not possible to pass that task elsewhere – we can’t start an <code>async let</code> task in one function then pass that task to a different function. On the other hand, if you create a task that returns a string and never throws an error, you can pass that <code>Task&lt;String, Never&gt;</code> object around as needed.</p><p>And finally, although task groups <em>can</em> work with heterogeneous results – i.e., child tasks that return different types of data – it takes the extra work of making an enum to wrap the data. <code>async let</code> and <code>Task</code> do not suffer from this problem because they always return a single result type, so each result can be different.</p><p>By sheer volume of advantages you might think that <code>async let</code> is clearly much less useful than both <code>Task</code> and task groups, but not all those points carry equal weight in real-world code. In practice, I would suggest you’re likely to:</p><ul><li>Use <code>async let</code> the most; it works best when there is a fixed amount of work to do.</li><li>Use <code>Task</code> for some places where <code>async let</code> doesn’t work, such as passing an incomplete value to a function.</li><li>Use task groups least commonly, or at least use them <em>directly</em> least commonly – you might build other things on top of them.</li></ul><p>I find that order is pretty accurate in practice, for a number of reasons:</p><ol><li>I normally want results from all the work I start, so being able to skip some or get results in completion order is less important.</li><li>It’s surprisingly common to want to work with different data types, which is clumsy with task groups.</li><li>If I need to be able to cancel tasks, <code>Task</code> is similar enough to <code>async let</code> that it’s easy to move across to <code>Task</code> without going all the way to a task group.</li></ol><p>So, again I would recommend you start with <code>async let</code>, move to <code>Task</code> if needed, then go to task groups only if there’s something specific they offer that you need.</p>",15),w={class:"hint-container details"},y=e("summary",null,"Similar solutions…",-1);function b(n,v){const t=d("VPCard");return h(),r("div",null,[e("h1",p,[e("a",f,[e("span",null,i(n.$frontmatter.title)+" 관련",1)])]),a(t,o(s({title:"Swift Concurrency by Example",desc:"Back to Home",link:"/hackingwithswift.com/concurrency/README.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(174,10,10,0.2)"})),null,16),g,k,a(t,o(s({title:"What’s the difference between async let, tasks, and task groups? | Swift Concurrency by Example",desc:"What’s the difference between async let, tasks, and task groups?",link:"https://hackingwithswift.com/quick-start/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),m,e("details",w,[y,a(t,o(s({title:"What are tasks and task groups? | Swift Concurrency by Example",desc:"What are tasks and task groups?",link:"/hackingwithswift.com/concurrency/what-are-tasks-and-task-groups.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(t,o(s({title:"What’s the difference between a task and a detached task? | Swift Concurrency by Example",desc:"What’s the difference between a task and a detached task?",link:"/hackingwithswift.com/concurrency/whats-the-difference-between-a-task-and-a-detached-task.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(t,o(s({title:"How to run tasks using SwiftUI’s task() modifier | Swift Concurrency by Example",desc:"How to run tasks using SwiftUI’s task() modifier",link:"/hackingwithswift.com/concurrency/how-to-run-tasks-using-swiftuis-task-modifier.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(t,o(s({title:"How to call an async function using async let | Swift Concurrency by Example",desc:"How to call an async function using async let",link:"/hackingwithswift.com/concurrency/how-to-call-an-async-function-using-async-let.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16),a(t,o(s({title:"How to create a task group and add tasks to it | Swift Concurrency by Example",desc:"How to create a task group and add tasks to it",link:"/hackingwithswift.com/concurrency/how-to-create-a-task-group-and-add-tasks-to-it.md",logo:"https://hackingwithswift.com/favicon.svg",background:"rgba(54,94,226,0.2)"})),null,16)])])}const x=c(u,[["render",b],["__file","whats-the-difference-between-async-let-tasks-and-task-groups.html.vue"]]),S=JSON.parse('{"path":"/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.html","title":"What’s the difference between async let, tasks, and task groups?","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"What’s the difference between async let, tasks, and task groups?","description":"Article(s) > What’s the difference between async let, tasks, and task groups?","category":["Swift","Article(s)"],"tag":["blog","hackingwithswift.com","crashcourse","swift","xcode","appstore"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > What’s the difference between async let, tasks, and task groups?"},{"property":"og:description","content":"What’s the difference between async let, tasks, and task groups?"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"What’s the difference between async let, tasks, and task groups?"}],["meta",{"property":"og:description","content":"Article(s) > What’s the difference between async let, tasks, and task groups?"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"hackingwithswift.com"}],["meta",{"property":"article:tag","content":"crashcourse"}],["meta",{"property":"article:tag","content":"swift"}],["meta",{"property":"article:tag","content":"xcode"}],["meta",{"property":"article:tag","content":"appstore"}],["meta",{"property":"article:published_time","content":"2023-04-25T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What’s the difference between async let, tasks, and task groups?\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-25T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"date":"2023-04-25T00:00:00.000Z","isOriginal":false},"headers":[],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":3.85,"words":1156},"filePathRelative":"hackingwithswift.com/concurrency/whats-the-difference-between-async-let-tasks-and-task-groups.md","localizedDate":"2023년 4월 25일","excerpt":"\\n"}');export{x as comp,S as data};
