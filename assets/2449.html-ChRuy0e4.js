import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,b as n,t as g,e as a,n as f,g as v,w as t,d as s,f as l,r as p,o as b}from"./app-BgNevrm5.js";const _={},y={id:"frontmatter-title-관련",tabindex:"-1"},x={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"table-of-contents"},z=n("hr",null,null,-1),I=n("p",null,[n("strong",null,"HTML 레이아웃을 고민하게 된 이유")],-1),U=n("p",null,"최근 우리 팀에서는 UI 라이브러리를 직접 만들기로 결정했다. 지금까지는 웹 사이트를 만들면서 HTML 레이아웃을 깊이 고민해 본 적이 없던 것 같다. 어떤 것이 좋은 레이아웃인지 생각하기보다는, 요소의 의미와 속성만 찾아본 후 바로 사용했을 뿐 깊이 궁금해하지 않았다. 특히 UI 라이브러리를 사용하면서부터는 이미 만들어져 있는 UI 컴포넌트를 가져다 쓰는 데에 익숙했다. 그런데 이번 프로젝트를 통해 HTML 레이아웃에 관해 다시 생각하게 되었고, 오랜만에 HTML 요소를 하나씩 뜯어보기 시작했다.",-1),T=n("p",null,"그동안 HTML 요소를 완벽히 시맨틱하게 사용했다고 자부하지는 못해도, 적어도 기본적인 요소는 숙지 후 사용하고 있다고 생각했는데 그건 내 착각이었다. 무엇보다 당황스러웠던 요소는 푸터(footer)였다. 푸터는 메인 콘텐츠 하단에 배치하는 요소이기에, 당연히 position 속성을 absolute로 지정하여 위치를 고정시키는 배치 방법만 있는 줄 알았다. 그러나 이번에 푸터를 배치할 수 있는 방법이 한 가지가 아니라는 사실을 알게 되었다.",-1),S=n("p",null,"이러한 깨달음은 과연 우리 라이브러리를 쓰는 사용자는 어떤 배치를 주로 선호할지, 또한 일반적으로 권장하는 배치 방법이 있는지에 대한 고민으로 이어졌다. 하지만 열심히 이곳저곳을 찾아봐도 명확하게 답을 주는 곳은 없었다. 그래서 이 기회에 W3C 문서와 예시를 참고하여, 나만의 설계 원칙을 직접 세워보기로 했다. 이번 글에서는 스스로 정립해 본 푸터 컴포넌트의 배치와 설계 원칙에 관해 이야기해 보고자 한다.",-1),A=n("img",{src:"https://yozm.wishket.com/media/news/2449/html5_layout.png",alt:'출처: <FontIcon icon="fas fa-globe"/>tcpschool.com',tabindex:"0",loading:"lazy"},null,-1),M={href:"https://tcpschool.com/html/html_space_layouts",target:"_blank",rel:"noopener noreferrer"},C=l('<hr><h2 id="푸터-컴포넌트를-만들며-생긴-고민" tabindex="-1"><a class="header-anchor" href="#푸터-컴포넌트를-만들며-생긴-고민"><span>푸터 컴포넌트를 만들며 생긴 고민</span></a></h2><p>UI 라이브러리를 만들면서 줄곧 고민한 지점은 바로 사용자의 자유도를 얼마나 보장해 주어야 하는지에 대한 부분이었다. 제약이 많으면 사용자는 제시한 대로 따르면 되지만, 원하는 커스터마이징을 할 수 없어서 불편을 느낄 수도 있다. 반면 제약을 걸지 않으면 사용자는 모든 옵션을 직접 지정해야 하고, 굳이 이 라이브러리를 사용할 필요성을 느끼지 못하게 될 것이다.</p><p>푸터 컴포넌트에선 <code>position</code> 옵션을 고정할지 말지가 바로 이 맥락의 고민이었다. 직관적으로 생각해 보면, 푸터는 뷰포트 하단에 배치되어야 하기에 <code>position: absolute</code>가 타당해 보인다. 하지만 스택 오버플로에서 <code>footer position</code>를 검색하면 의외로 fixed를 제안하는 답변이 많이 보인다.</p><h3 id="position-absolute" tabindex="-1"><a class="header-anchor" href="#position-absolute"><span><code>position: absolute</code></span></a></h3><p>푸터의 <code>position</code>을 absolute로 지정하면 마치 포토샵의 레이어처럼 부모 요소 위로 겹치게 되고, 푸터의 높이만큼 부모 요소를 가린다. 여기서 푸터에 <code>bottom:0</code>을 주면, 부모 요소의 아랫부분으로 위치는 내려가지만 여전히 부모 요소를 일부 가린다. 이를 해결하기 위한 여러 트릭이 있는데, 대표적으로 <code>bottom</code> 값으로 푸터의 높이만큼 마이너스 값을 지정하거나, 아니면 부모 요소에 그만큼의 <code>padding-bottom</code>을 지정하는 방법이 있다. 또는 DOM 트리가 Mount되는 시점을 고려해서 부모 요소의 아래쪽에 강제로 푸터 엘리먼트를 attach하는 방법도 있다.</p><p>이제 UI 라이브러리의 푸터 컴포넌트가 <code>position</code>에 <code>absolute</code>를 가지고 있다고 가정해 보자. 사용자는 푸터 컴포넌트를 배치하자마자 푸터 컴포넌트가 부모 요소를 가리는 것을 목격할 것이고, 푸터를 아래쪽으로 보낼 방법을 고민해야 할 것이다. 그러나 사용자가 너무 귀찮을 수 있으니, 푸터 컴포넌트에 아예 앞서 언급한 트릭 로직까지 넣어두면 좋을 것 같다. 이제 사용자는 푸터 컴포넌트를 간단하게 배치할 수 있게 됐다.</p><h3 id="position-fixed" tabindex="-1"><a class="header-anchor" href="#position-fixed"><span><code>position: fixed</code></span></a></h3><p>그런데 스택 오버플로에서 확인했듯이 푸터의 <code>position</code>을 fixed로 지정하고 싶어 하는 사용자들도 있다. fixed 속성을 통해 위치가 고정된 엘리먼트는 뷰포트 기준으로 위치가 고정되므로, 부모 요소의 내용이 길어져 스크롤이 발생하더라도 무시하고 자기 위치를 고수한다. 개인적으로는 좀 이상하다고 느끼는 UI다. 푸터는 HTML 레이아웃상 아래쪽, 즉 콘텐츠의 맨 끝에 위치해야 자연스럽다고 생각하기 때문이다. 다만 사용자의 요구사항이 더 우선이기 때문에, 우리의 푸터 컴포넌트는 이 요구사항도 충족시켜 주어야 한다.</p><p>그러면 앞서 <code>position: absolute</code>를 지정했던 설계에 수정이 필요하다. 푸터 컴포넌트의 옵션으로 <code>position</code>을 제공하면 어떨까? 만약 그런 옵션이 있다면 값을 <code>absolute</code>와 <code>fixed</code>로 제한하는 것보다는 CSS의 기본 <code>position</code>을 모두 허용하는 것이 더 자연스럽다. 이쯤에서 궁금한 것은 사용자의 요구사항이다. 다른 <code>position</code>을 지정하고 싶은 사용자도 있지 않을까?</p><h3 id="position-relative-flexbox" tabindex="-1"><a class="header-anchor" href="#position-relative-flexbox"><span><code>position: relative</code>(flexbox)</span></a></h3><p>푸터 배치에 관해 좀 더 공부해 본 결과, <code>position</code>은 <code>relative</code>로 두고 <code>flexbox</code>를 이용할 수 있다는 점을 알게 되었다. 실제로 자주 이용하는 웹사이트를 살펴본 결과, 의외로 푸터 <code>position</code>이 <code>relative</code>로 지정되어 있는 경우가 많았다. 아래 이미지를 보면, 모두 우측 하단 Styles 탭에 <code>position:relative</code> 속성이 포함되어있는 것을 볼 수 있다.</p>',12),H=n("figure",null,[n("img",{src:"https://yozm.wishket.com/media/news/2449/nuxt.png",alt:"nuxt",tabindex:"0",loading:"lazy"}),n("figcaption",null,"nuxt")],-1),L=n("figure",null,[n("img",{src:"https://yozm.wishket.com/media/news/2449/vuetify.png",alt:"Vuetify",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Vuetify")],-1),V=n("figure",null,[n("img",{src:"https://yozm.wishket.com/media/news/2449/vite.png",alt:"Vite",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Vite")],-1),R=n("figure",null,[n("img",{src:"https://yozm.wishket.com/media/news/2449/apple.png",alt:"Apple",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Apple")],-1),P=l(`<p>이에 고민이 꼬리에 꼬리를 물고 이어졌다.</p><ul><li><code>position</code>을 <code>absolute</code> 또는 <code>fixed</code>로 고정할 것인가?</li><li>아니면 <code>relative</code>로 고정하고, 푸터가 추가되는 순간 부모 컴포넌트에 자동으로 <code>display:flex</code> 속성을 부여할 것인가?</li><li>그럴 거면 애초에 CSS position 선택지를 모두 주는 게 자연스럽지 않을까?</li><li>만약 그렇게 한다면 각각의 <code>position</code> 속성에 대해 별도의 CSS 대응을 해두어야 하지 않을까?</li></ul><p>고민 끝에 결국 <code>position</code>을 지정하지 않기로 했다. 이제 대략적인 윤곽이 잡혔으니 컴포넌트 설계 원칙을 세우기로 했다. 그래야 작업하면서 똑같은 고민의 굴레에 갇히는 일이 없을 것 같았다.</p><hr><h2 id="내가-세운-좋은-푸터-컴포넌트의-원칙" tabindex="-1"><a class="header-anchor" href="#내가-세운-좋은-푸터-컴포넌트의-원칙"><span>내가 세운 좋은 푸터 컴포넌트의 원칙</span></a></h2><p>본격적인 작업에 앞서 UI 라이브러리 관점에서 좋은 푸터 컴포넌트란 이렇게 만들어져야 한다는 기준을 세웠고, 그 내용은 다음과 같다.</p><figure><img src="https://yozm.wishket.com/media/news/2449/image2.png" alt="1) 푸터 컴포넌트는 고정된 높이 없이 콘텐츠에 의해 높이가 정해져야 한다." tabindex="0" loading="lazy"><figcaption>1) 푸터 컴포넌트는 고정된 높이 없이 콘텐츠에 의해 높이가 정해져야 한다.</figcaption></figure><figure><img src="https://yozm.wishket.com/media/news/2449/image8.png" alt="2) 메인 영역의 아래쪽 영역은 전부 푸터가 차지할 수 있어야 한다." tabindex="0" loading="lazy"><figcaption>2) 메인 영역의 아래쪽 영역은 전부 푸터가 차지할 수 있어야 한다.</figcaption></figure><p>만약 메인 영역의 콘텐츠가 너무 짧다면 메인 영역의 아래쪽을 <code>padding-bottom</code>으로 채우거나, 메인 영역의 높이를 충분히 크게 지정해서 메인 영역의 크기를 키울 수 있을 것이다. 그러나 이에 대해 푸터가 일부러 <code>margin-top</code>을 갖는 등 관여해서는 안 된다. 이를 위해 푸터의 flex속성을 <code>1 1 auto</code>로 지정한다. (이는 부모 컴포넌트를 <code>flexbox</code>로 지정하는 경우 적용되는 속성이다.)</p><figure><img src="https://yozm.wishket.com/media/news/2449/image1_q2X0xbU.png" alt="3) 만약 메인 콘텐츠가 매우 짧고 푸터의 높이를 고정값으로 지정하는 경우, 푸터 아래쪽에 여백이 남을 수 있다." tabindex="0" loading="lazy"><figcaption>3) 만약 메인 콘텐츠가 매우 짧고 푸터의 높이를 고정값으로 지정하는 경우, 푸터 아래쪽에 여백이 남을 수 있다.</figcaption></figure><figure><img src="https://yozm.wishket.com/media/news/2449/image4.png" alt="4) 만약 사용자가 원한다면 푸터 스타일을 직접 수정할 수 있어야 한다.&lt;br/&gt;이러한 기준에 따라서 최종적으로 결정된 스타일시트는 다음과 같다." tabindex="0" loading="lazy"><figcaption>4) 만약 사용자가 원한다면 푸터 스타일을 직접 수정할 수 있어야 한다.<br>이러한 기준에 따라서 최종적으로 결정된 스타일시트는 다음과 같다.</figcaption></figure><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.vs-footer</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-backgroundColor<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-comp-backgroundColor<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">bottom</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-bottom<span class="token punctuation">,</span> auto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-color<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-comp-color<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-display<span class="token punctuation">,</span> flex<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">flex</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-flex<span class="token punctuation">,</span> 1 1 auto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-height<span class="token punctuation">,</span> auto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-left<span class="token punctuation">,</span> auto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-padding<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-position<span class="token punctuation">,</span> static<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">right</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-right<span class="token punctuation">,</span> auto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-top<span class="token punctuation">,</span> auto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-width<span class="token punctuation">,</span> auto<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">&amp;.primary</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-backgroundColor<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-comp-backgroundColor-primary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-color<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-comp-color-primary<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.vs-footer-content</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">text-align</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--vs-footer-textAlign<span class="token punctuation">,</span> inherit<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),D={href:"https://github.com/seaneez/vlossom/blob/footer-stale/packages/vlossom/src/components/vs-footer/VsFooter.scss",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"seaneez/vlossom",-1),F={href:"https://developer.mozilla.org/ko/docs/Web/CSS/var",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"var",-1),B=n("code",null,"–vs-footer",-1),q=n("code",null,"var",-1),K=n("code",null,"–vs-footer",-1),O=n("code",null,"prefix",-1),W=n("hr",null,null,-1),Z=n("h2",{id:"ui-라이브러리를-만들며-깨달은-것",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ui-라이브러리를-만들며-깨달은-것"},[n("span",null,"UI 라이브러리를 만들며 깨달은 것")])],-1),j=n("p",null,"UI 라이브러리를 개발할 때 무엇보다 중요한 것은 사용성이다. 베스트 케이스를 만드는 것도 중요하지만, 컴포넌트가 활용될 수 있는 다양한 방식을 함께 고려해야 한다는 점을 깨달았다. 물론 가장 나은 방식을 베스트 케이스로 두고 컴포넌트를 만들고, 그 방식을 따르게 하면 디자인에 대한 사용자의 고민을 덜어줄 수 있다. 그 자체로 사용하기 편한 라이브러리가 될 수 있을 것이다. 그러나 사용하기 쉽다는 이유만으로 여러 제약을 둔다면 오히려 사용성을 해칠 수도 있다. 만약 사용자가 추구하는 방향이 있다면, 그 역시 가능하게 해야 한다.",-1),X=n("p",null,[s("이번에 푸터 컴포넌트를 개발하면서 사용자가 과연 어떤 것을 원할지 깊이 고민해 보았고, 그 과정에서 다양한 푸터 배치 방식을 알게 되었다. 특히 "),n("code",null,"position"),s(" 속성의 경우 하나로 제한하지 않았지만, 또 다른 경우 다소 마이너한 취향의 사용법은 제한하는 것이 다수의 사용자에게 편리할 수도 있다.")],-1),J=n("p",null,"현재 우리 팀은 계속해서 다양한 UI 컴포넌트를 오픈소스로 개발하고 있다. 누구나 사용하기 편리한 UI 라이브러리를 만든다는 목표하에, 나 또한 사용자 관점에서 한 번 더 고민하며 한층 더 성장하게 된 것 같다. 앞으로도 나만의 컴포넌트 원칙을 세워 더 나은 개발자가 되는 일에 집중해 보고자 한다.",-1);function $(u,G){const r=p("VPCard"),i=p("router-link"),d=p("SiteInfo"),c=p("FontIcon"),m=p("Tabs");return b(),k("div",null,[n("h1",y,[n("a",x,[n("span",null,g(u.$frontmatter.title)+" 관련",1)])]),a(r,f(v({title:"CSS > Article(s)",desc:"Article(s)",link:"/programming/css/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),n("nav",w,[n("ul",null,[n("li",null,[a(i,{to:"#푸터-컴포넌트를-만들며-생긴-고민"},{default:t(()=>[s("푸터 컴포넌트를 만들며 생긴 고민")]),_:1}),n("ul",null,[n("li",null,[a(i,{to:"#position-absolute"},{default:t(()=>[s("position: absolute")]),_:1})]),n("li",null,[a(i,{to:"#position-fixed"},{default:t(()=>[s("position: fixed")]),_:1})]),n("li",null,[a(i,{to:"#position-relative-flexbox"},{default:t(()=>[s("position: relative(flexbox)")]),_:1})])])]),n("li",null,[a(i,{to:"#내가-세운-좋은-푸터-컴포넌트의-원칙"},{default:t(()=>[s("내가 세운 좋은 푸터 컴포넌트의 원칙")]),_:1})]),n("li",null,[a(i,{to:"#ui-라이브러리를-만들며-깨달은-것"},{default:t(()=>[s("UI 라이브러리를 만들며 깨달은 것")]),_:1})])])]),z,a(d,{name:"UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙 | 요즘IT",desc:"최근 우리 팀에서는 UI 라이브러리를 직접 만들기로 결정했다. 우리 라이브러리를 쓰는 사용자는 어떤 배치를 주로 선호할지, 또한 일반적으로 권장하는 배치 방법이 있는지에 대한 고민으로 이어졌다. 하지만 열심히 이곳저곳을 찾아봐도 명확하게 답을 주는 곳은 없었다. 그래서 이 기회에 W3C 문서와 예시를 참고하여, 나만의 설계 원칙을 직접 세워보기로 했다. 이번 글에서는 스스로 정립해 본 푸터 컴포넌트의 배치와 설계 원칙에 관해 이야기해 보고자 한다.",url:"https://yozm.wishket.com/magazine/detail/2449/",logo:"https://yozm.wishket.com/static/renewal/img/global/gnb_yozmit.svg",preview:"https://yozm.wishket.com/media/news/2449/html5_layout.png"}),I,U,T,S,n("figure",null,[A,n("figcaption",null,[s("출처: "),n("a",M,[a(c,{icon:"fas fa-globe"}),s("tcpschool.com")])])]),C,a(m,{id:"58",data:[{id:"nuxt"},{id:"Vuetify"},{id:"Vite"},{id:'<FontIcon icon="fa-brands fa-apple"/>Apple'}],active:0},{title0:t(({value:o,isActive:e})=>[s("nuxt")]),title1:t(({value:o,isActive:e})=>[s("Vuetify")]),title2:t(({value:o,isActive:e})=>[s("Vite")]),title3:t(({value:o,isActive:e})=>[a(c,{icon:"fa-brands fa-apple"}),s("Apple")]),tab0:t(({value:o,isActive:e})=>[H]),tab1:t(({value:o,isActive:e})=>[L]),tab2:t(({value:o,isActive:e})=>[V]),tab3:t(({value:o,isActive:e})=>[R]),_:1}),P,n("blockquote",null,[n("p",null,[s("출처: "),n("a",D,[s("Vlossom ("),a(c,{icon:"iconfont icon-github"}),s("("),E,s("))")])])]),n("p",null,[s("위 SCSS 파일에서 사용된 "),n("a",F,[a(c,{icon:"fa-brands fa-firefox"}),N,s(" 함수")]),s("는 CSS 파일에서 특정 값을 변수로 추상화하고 싶을 때 사용할 수 있는 함수다. 별도 파일에 미리 "),B,s("로 시작하는 변수들을 선언해 놓고, 필요한 곳에서 "),q,s(" 함수로 호출하여 사용했다. "),K,s("는 "),O,s("로, 사용자가 직접 지정한 스타일 속성 앞에 자동으로 붙도록 해두었다. 그래서 var 함수의 첫 번째 인자는 사용자가 커스터마이징한 값들이고, 두 번째 인수는 대체 값이다. 사용자가 아무런 값을 지정하지 않으면 디폴트로 대체 값이 지정되는 방식이다. 물론 사용자가 원한다면 class를 붙여 스타일을 수정할 수도 있다.")]),W,Z,j,X,J])}const nn=h(_,[["render",$],["__file","2449.html.vue"]]),sn=JSON.parse('{"path":"/yozm.wishket.com/2449.html","title":"UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙","description":"Article(s) > UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙","icon":"fa-brands fa-android","category":["CSS","Article(s)"],"tag":["blog","yozm.wishket.com","css","html"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙"},{"property":"og:description","content":"UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙"},{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/yozm.wishket.com/2449.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/bookshelf/yozm.wishket.com/2449.html"}],["meta",{"property":"og:site_name","content":"📚Bookshelf"}],["meta",{"property":"og:title","content":"UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙"}],["meta",{"property":"og:description","content":"Article(s) > UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://yozm.wishket.com/media/news/2449/html5_layout.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://yozm.wishket.com/media/news/2449/html5_layout.png"}],["meta",{"name":"twitter:image:alt","content":"UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙"}],["meta",{"property":"article:tag","content":"blog"}],["meta",{"property":"article:tag","content":"yozm.wishket.com"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:published_time","content":"2024-02-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UI 라이브러리 개발 일지: HTML 푸터 배치와 설계 원칙\\",\\"image\\":[\\"https://tcpschool.com/html/html_space_layouts\\",\\"https://yozm.wishket.com/media/news/2449/nuxt.png\\",\\"https://yozm.wishket.com/media/news/2449/vuetify.png\\",\\"https://yozm.wishket.com/media/news/2449/vite.png\\",\\"https://yozm.wishket.com/media/news/2449/apple.png\\",\\"https://yozm.wishket.com/media/news/2449/image2.png\\",\\"https://yozm.wishket.com/media/news/2449/image8.png\\",\\"https://yozm.wishket.com/media/news/2449/image1_q2X0xbU.png\\",\\"https://yozm.wishket.com/media/news/2449/image4.png\\"],\\"datePublished\\":\\"2024-02-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]],"prev":"/programming/css/articles/README.md","date":"2024-02-07T00:00:00.000Z","isOriginal":false,"cover":"https://yozm.wishket.com/media/news/2449/html5_layout.png"},"headers":[{"level":2,"title":"푸터 컴포넌트를 만들며 생긴 고민","slug":"푸터-컴포넌트를-만들며-생긴-고민","link":"#푸터-컴포넌트를-만들며-생긴-고민","children":[{"level":3,"title":"position: absolute","slug":"position-absolute","link":"#position-absolute","children":[]},{"level":3,"title":"position: fixed","slug":"position-fixed","link":"#position-fixed","children":[]},{"level":3,"title":"position: relative(flexbox)","slug":"position-relative-flexbox","link":"#position-relative-flexbox","children":[]}]},{"level":2,"title":"내가 세운 좋은 푸터 컴포넌트의 원칙","slug":"내가-세운-좋은-푸터-컴포넌트의-원칙","link":"#내가-세운-좋은-푸터-컴포넌트의-원칙","children":[]},{"level":2,"title":"UI 라이브러리를 만들며 깨달은 것","slug":"ui-라이브러리를-만들며-깨달은-것","link":"#ui-라이브러리를-만들며-깨달은-것","children":[]}],"git":{"contributors":[{"name":"chanhi2000","email":"chanhi2000@gmail.com","commits":2}]},"readingTime":{"minutes":1.53,"words":460},"filePathRelative":"yozm.wishket.com/2449.md","localizedDate":"2024년 2월 7일","excerpt":"\\n"}');export{nn as comp,sn as data};
